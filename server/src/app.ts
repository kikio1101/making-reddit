import express, { ErrorRequestHandler } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
// import authRoutes from "./routes/auth";
// import postRoutes from "./routes/posts";
// import userRoutes from "./routes/users";
// import { checkEnv } from "./utils/helper";

dotenv.config();
// 환경변수 체크해서 정상일 때만 서버 실행
// checkEnv();
const cspOptions = {
  directives: {
    // 헬멧 기본 옵션 가져오기
    ...helmet.contentSecurityPolicy.getDefaultDirectives(),

    /* 
    커스텀 옵션 - script-src]
    none : 어떳 것도 허용하지 않음
  self : 현재 출처에서는 허용하지만 하위 도메인에서는 허용되지 않음
  unsafe-inline : 인라인 자바스크립트, 인라인 스타일을 허용
    */

    "script-src": ["'self'", "'unsafe-inline'"],
  },
};

const app = express();

app.set("port", process.env.PORT || 8000);
app.use(morgan("dev"));
app.use(
  helmet({
    contentSecurityPolicy: cspOptions,
  })
);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOption = {
  origin: ["http://127.0.0.1:3000"],
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOption));

app.get("/", (_req, res) => res.send("서버 정상 작동중...")); //  ping
// app.use("/api/instagram/auth", authRoutes);
// app.use("/api/instagram/posts", postRoutes);
// app.use("/api/instagram/users", userRoutes);
// 404 처리 미들웨어
app.use((_req, res) => {
  res
    .status(404)
    .json({ success: false, message: "요청한 API를 찾을 수 없습니다." });
});

// 에러 미들웨어
const errorHandler: ErrorRequestHandler = (err, req, res) => {
  // eslint-disable-next-line no-console
  console.error(err);
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res
    .status(err.status || 500)
    .json({ success: false, message: "서버에러가 발생했습니다." });
};

app.use(errorHandler);

export default app;

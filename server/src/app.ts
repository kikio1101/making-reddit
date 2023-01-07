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

const app = express();
app.set("port", process.env.PORT || 8000);

app.use(morgan("dev"));
app.use(helmet());
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

import { AppDataSource } from "./data-source";
import app from "./app";

app.listen(app.get("port"), async () => {
  // eslint-disable-next-line no-console
  console.log(app.get("port"), "포트로 서버가 동작 중 입니다.");

  try {
    await AppDataSource.initialize();
    // eslint-disable-next-line no-console
    console.log("database가 연결 되었습니다.");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
});

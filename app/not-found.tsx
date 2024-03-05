import Container from "./ui/container";


export default function NotFound() {
  return <main>
    <Container>
      <h1 className="text-lg">존재하지 않는 경로에 접속하셨어요.</h1>
    </Container>
  </main>;
}
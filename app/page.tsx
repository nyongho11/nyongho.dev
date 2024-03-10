import Image from "next/image";
import Container from "./ui/container";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main>
      <Container>
        <div className="prose dark:prose-invert break-keep leading-8">
          <h2 className="text-2xl font-bold">김용호</h2>
          <p>"단순한 것이 아름답다" 라는 말을 좋아합니다.</p>
          <p>
            새로운 지식을 습득하는 것을 즐기며 이것이 코드와 사용자 경험의
            향상으로 연결 되는 곳에 열정이 닿습니다.
          </p>
          <div className="flex gap-5 mt-10">
            <a href="mailto:nyongho0303@gmail.com" aria-label="email">
              <EnvelopeClosedIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/%EC%9A%A9%ED%98%B8-%EA%B9%80-366976234/"
              aria-label="linkedin"
              target="_blank"
            >
              <LinkedInLogoIcon />
            </a>
            <a
              href="https://github.com/Yongho5580"
              aria-label="github"
              target="_blank"
            >
              <GitHubLogoIcon />
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}

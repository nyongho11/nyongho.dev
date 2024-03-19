import Image from "next/image";
import Container from "./ui/container";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import Tree from "@/public/assets/tree.jpg"

export default function Home() {
  return (
    <main>
      <Container>
        <h2 className="text-2xl font-bold">김용호</h2>
        <div className="flex flex-col gap-0 sm:gap-8 sm:flex-row">
          <Image src={Tree} alt="tree" width={200} height={200} placeholder="blur" />
          <div className="break-keep leading-8 flex flex-col justify-center">
            <p>"단순함에 아름다움이 있다." 라는 말을 좋아합니다.</p>
            <p>
              새로운 지식을 습득하는 과정을 즐기며 이것이 코드와 사용자 경험의
              향상으로 연결 되는 곳에 열정이 닿습니다.
            </p>
            <p>
              숲보다는 나무를 바라보려고 노력합니다. 나무를 이해하지 못하면 숲이 나무로 이루어져 있다는 기본적인 사실조차 잊어버립니다.
            </p>
          </div>
        </div>
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
      </Container>
    </main>
  );
}

import Image from "next/image";
import Container from "./ui/container";

export default function Home() {
  return (
    <main>
      <Container>      
        <div className="break-keep leading-8">
        <h3 className="font-bold">모험과 두려움 그 사이에 머무르는 개발자입니다.</h3>
        <p>기술을 깊게 공부하는 것도 좋지만 저는 다양한 기술을 사용해보고 프로덕트를 만드는 것이 더 재미있습니다.</p>
        <p>새로운 기술을 접할 때마다 그 기술의 가능성에 대해 궁금해하고, 이를 활용하여 무엇을 만들어낼 수 있을지 고민합니다.</p>
        <p>명확하고 가독성 좋은 코드를 작성하는 것에 관심이 많으며, 정보를 공유하는 것에 기쁨을 느낍니다.</p>
        <p>보안을 했고, 요즘은 프론트엔드 개발자로서 사용자에게 편리하고 즐거운 경험을 제공하는 프로덕트를 만들기 위해 노력하고 있습니다.</p>
      </div>
      </Container>
    </main>
  );
}

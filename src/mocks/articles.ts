import {faker} from "@faker-js/faker";

faker.locale = "ko";

const images: string[] = [];
for (let i = 1; i <= 20; i++) {
    const image = require(`../assets/images/thumbnail/${i}.png`);
    images.push(image);
}
type PrivateArticleType<T> = {
    readonly [P in keyof T]: T[P]
}

interface ArticleListType {
    id: string | number;
    category: string;
    thumbnail: string;
    title: string;
    content: string;
    createDate: string;
    editor: {
        imageUrl: string;
        name: string;
        position: string;
        content: string;
    }
}

const techArticles: PrivateArticleType<ArticleListType>[] = [
    {
        id: faker.datatype.uuid(),
        category: "tech",
        thumbnail: images[0],
        title: "Spring Boot Actuator의 헬스체크 살펴보기",
        content:
            "서버의 상태를 알려주는 헬스 체크에 대해 알고 계시나요? 단순히 200 OK만 내려주겠거니 하고 별로 신경을 안 쓰고 계셨나요? 해당 포스트에서는 Spring Boot Actuaor가 제공해주는 헬스 체크는 어떤 식으로 서버의 상태를 점검하는지, 어떤 부분을 주의하며 사용해야하는지 알아봅니다.",
        createDate: "2023. 4. 1",
        editor: {
            imageUrl: faker.image.avatar(),
            name: faker.name.firstName(),
            position: faker.name.jobTitle(),
            content: faker.lorem.paragraphs(5),
        },
    },

    {
        id: faker.datatype.uuid(),
        category: "tech",
        thumbnail: images[1],
        title: "ESLint와 AST로 코드 퀄리티 높이기",
        content:
            "ESLint와 AST로 토스에서 코드 퀄리티를 높인 방법에 대해 소개드려요.",
        createDate: "2023. 3. 31",
        editor: {
            imageUrl: faker.image.avatar(),
            name: faker.name.firstName(),
            position: faker.name.jobTitle(),
            content: faker.lorem.paragraphs(5),
        },
    },

    {
        id: faker.datatype.uuid(),
        category: "tech",
        thumbnail: images[2],
        title: "tosspayments-restdocs: 선언형 문서 작성 라이브러리",
        content:
            "REST Docs 를 최소한의 코드로 작성하면서 변화에도 더 유연하게 대처할 수 있는 tosspayments-restdocs 라이브러리와, 라이브러리에 녹인 기술들을 소개합니다.",
        createDate: "2023. 3. 22",
        editor: {
            imageUrl: faker.image.avatar(),
            name: faker.name.firstName(),
            position: faker.name.jobTitle(),
            content: faker.lorem.paragraphs(5),
        },
    },

    {
        id: faker.datatype.uuid(),
        category: "tech",
        thumbnail: images[3],
        title: "선언적인 코드 작성하기",
        content:
            "선언적인 코드, 토스 프론트엔드 챕터는 어떻게 생각을 하고 있을까요?",
        createDate: "2023. 3. 16",
        editor: {
            imageUrl: faker.image.avatar(),
            name: faker.name.firstName(),
            position: faker.name.jobTitle(),
            content: faker.lorem.paragraphs(5),
        },
    },

    {
        id: faker.datatype.uuid(),
        category: "tech",
        thumbnail: images[4],
        title: "똑똑하게 브라우저 Polyfill 관리하기",
        content:
            "현대적인 JavaScript를 쓰면서도 넓은 범위의 기기를 지원하기 위한 Polyfill을 어떻게 똑똑하게 설정할 수 있는지 소개합니다.",
        createDate: "2023. 1. 21",
        editor: {
            imageUrl: faker.image.avatar(),
            name: faker.name.firstName(),
            position: faker.name.jobTitle(),
            content: faker.lorem.paragraphs(5),
        },
    },

    {
        id: faker.datatype.uuid(),
        category: "tech",
        thumbnail: images[5],
        title: "토스증권 QA 문화 ‘통합테스트’를 아시나요? (feat. 해외주식)",
        content:
            "토스증권 해외주식 출시 전에 사내 임직원 대상으로 진행한 ‘통합테스트’에 대해 소개합니다. 통합테스트 진행 방식을 참고하여 간단한 규칙과 사용자 시나리오를 활용해 사용자의 반응을 미리 확인해 보세요.",
        createDate: "2022. 12. 12",
        editor: {
            imageUrl: faker.image.avatar(),
            name: faker.name.firstName(),
            position: faker.name.jobTitle(),
            content: faker.lorem.paragraphs(5),
        },
    },

    {
        id: faker.datatype.uuid(),
        category: "tech",
        thumbnail: images[6],
        title: "NestJS 환경에 맞는 Custom Decorator 만들기",
        content:
            "NestJS에서 데코레이터를 만들기 위해서는 NestJS의 DI와 메타 프로그래밍 환경 등을 고려해야 합니다. 어떻게 하면 이러한 NestJS 환경에 맞는 데코레이터를 만들 수 있을지 고민해보았습니다.",
        createDate: "2022. 11. 22",
        editor: {
            imageUrl: faker.image.avatar(),
            name: faker.name.firstName(),
            position: faker.name.jobTitle(),
            content: faker.lorem.paragraphs(5),
        },
    },

    {
        id: faker.datatype.uuid(),
        category: "tech",
        thumbnail: images[7],
        title: "TypeScript 타입 시스템 뜯어보기: 타입 호환성",
        content:
            "타입호환성은 무엇이며 왜 필요할까요? 타입호환이 지원되지 않는 경우가 존재한다는 것을 아셨나요? 평소 익숙했던 개념들에 대해 질문을 던져가며 TypeScript 타입 시스템에 관해 심도있게 알아보고자 합니다.",
        createDate: "2022. 10. 26",
        editor: {
            imageUrl: faker.image.avatar(),
            name: faker.name.firstName(),
            position: faker.name.jobTitle(),
            content: faker.lorem.paragraphs(5),
        },
    },

    {
        id: faker.datatype.uuid(),
        category: "tech",
        thumbnail: images[8],
        title: "토스증권 QA Team을 소개합니다",
        content:
            "이 글은 토스증권 QA Team에 입사를 고려 중인 지원자들을 위해 작성된 글입니다. 토스증권 QA Manager 하는 역할과 일하는 방식은 어떻게 다를까요?",
        createDate: "2022. 10. 25",
        editor: {
            imageUrl: faker.image.avatar(),
            name: faker.name.firstName(),
            position: faker.name.jobTitle(),
            content: faker.lorem.paragraphs(5),
        },
    },

    {
        id: faker.datatype.uuid(),
        category: "tech",
        thumbnail: images[9],
        title: "CommonJS와 ESM에 모두 대응하는 라이브러리 개발하기: exports field",
        content:
            "Node.js에는 두 가지 Module System이 존재합니다. 토스 프론트엔드 챕터에서 운영하는 100개가 넘는 라이브러리들은 그것에 어떻게 대응하고 있을까요?",
        createDate: "2022. 10. 4",
        editor: {
            imageUrl: faker.image.avatar(),
            name: faker.name.firstName(),
            position: faker.name.jobTitle(),
            content: faker.lorem.paragraphs(5),
        },
    },
];

const designArticles: ArticleListType[] = [
    {
        id: faker.datatype.uuid(),
        category: "design",
        thumbnail: images[10],
        title: "첫 인터랙션 디자이너가 문제를 해결하는 법",
        content:
            "처음 입사했을 때 인터랙션 디자이너의 역할에 대해 막연하게 느꼈을 때가 있었어요. 하지만 제품의 문제를 하나씩 해결하면서 저의 역할을 정의해나갈 수 있었어요. 어떤 시행착오가 있었는지 공유해 드릴게요.",
        createDate: "2023. 5. 4",
        editor: {
            imageUrl: faker.image.avatar(),
            name: faker.name.firstName(),
            position: faker.name.jobTitle(),
            content: faker.lorem.paragraphs(5),
        },
    },
    {
        id: faker.datatype.uuid(),
        category: "design",
        thumbnail: images[11],
        title: "리서치를 하고 싶어하는 사람을 리서치하세요",
        content:
            "입사하자마자 사용자가 아닌 동료들부터 인터뷰했던 이유. 토스의 첫 UX 리서처로 자리잡아 갔던 과정을 소개할게요.",
        createDate: "2023. 4. 27",
        editor: {
            imageUrl: faker.image.avatar(),
            name: faker.name.firstName(),
            position: faker.name.jobTitle(),
            content: faker.lorem.paragraphs(5),
        },
    },

    {
        id: faker.datatype.uuid(),
        category: "design",
        thumbnail: images[12],
        title: "첫 그래픽 디자이너가 했던 가장 비효율적인 일",
        content:
            "첫 번째 그래픽 디자이너로 입사해서 자리잡기까지의 여정과, 그래픽 디자이너만의 노하우를 알려드려요.",
        createDate: "2023. 4. 20",
        editor: {
            imageUrl: faker.image.avatar(),
            name: faker.name.firstName(),
            position: faker.name.jobTitle(),
            content: faker.lorem.paragraphs(5),
        },
    },

    {
        id: faker.datatype.uuid(),
        category: "design",
        thumbnail: images[13],
        title: "첫 UX writer는 무슨 일을 해야 할까",
        content:
            "이게 정말 UX writer만 할 수 있는 일일까? 내가 해야 하는 일이 이것일까? 생각했을 때 확신이 없었어요. 일단은 모든 업무를 가리지 않고 다 받아서 무작정 열심히 처리했었죠.",
        createDate: "2023.4. 14",
        editor: {
            imageUrl: faker.image.avatar(),
            name: faker.name.firstName(),
            position: faker.name.jobTitle(),
            content: faker.lorem.paragraphs(5),
        },
    },

    {
        id: faker.datatype.uuid(),
        category: "design",
        thumbnail: images[14],
        title: "내 아이디어를 너무 믿지 마세요",
        content:
            "너무 좋은 아이디어라고 생각해서 만들었는데 실제 유저들의 반응은 정반대였어요.",
        createDate: "2023. 3. 28",
        editor: {
            imageUrl: faker.image.avatar(),
            name: faker.name.firstName(),
            position: faker.name.jobTitle(),
            content: faker.lorem.paragraphs(5),
        },
    },

    {
        id: faker.datatype.uuid(),
        category: "design",
        thumbnail: images[15],
        title: "추천할 때는 제일 좋은 것 하나면 된다",
        content:
            "제품을 만들 때, 사용자의 고민을 덜어주는 것이 중요해요. 사용자에게는 어떤 선택지를 주는 것이 좋을까요?",
        createDate: "2023. 3. 23",
        editor: {
            imageUrl: faker.image.avatar(),
            name: faker.name.firstName(),
            position: faker.name.jobTitle(),
            content: faker.lorem.paragraphs(5),
        },
    },

    {
        id: faker.datatype.uuid(),
        category: "design",
        thumbnail: images[16],
        title: "토스 디자인 원칙 Value first, Cost later",
        content:
            "토스의 제품 디자인 원칙 중에는 Value first, cost later라는 항목이 있어요. 비용을 말하기 전에 가치를 명확하게 전달해야한다는 내용이에요. 가치를 먼저 보여주는 것 만으로도 지표를 눈에 띄게 개선한 사례를 소개해드릴게요.",
        createDate: "2023. 3. 16",
        editor: {
            imageUrl: faker.image.avatar(),
            name: faker.name.firstName(),
            position: faker.name.jobTitle(),
            content: faker.lorem.paragraphs(5),
        },
    },

    {
        id: faker.datatype.uuid(),
        category: "design",
        thumbnail: images[17],
        title: "디자이너가 새로운 도메인을 빠르게 학습하는 법",
        content:
            "토스는 일이 굉장히 빠르게 돌아가는 조직이에요. 저는 1년 반 동안 무려 4개의 새로운 분야를 학습해야 했어요. 이때 제가 쓴 방법들을 알려드릴게요.",
        createDate: "2023. 3. 7",
        editor: {
            imageUrl: faker.image.avatar(),
            name: faker.name.firstName(),
            position: faker.name.jobTitle(),
            content: faker.lorem.paragraphs(5),
        },
    },

    {
        id: faker.datatype.uuid(),
        category: "design",
        thumbnail: images[18],
        title: "문제 원인의 원인을 찾아서",
        content:
            "좋은 해결책을 내기 위해서 제가 쓰는 방법은, 문제 원인의 원인을 찾는 거예요. 진짜 문제를 발견하면, 임팩트 있는 해결책을 생각해 낼 확률이 훨씬 높아지죠.",
        createDate: "2023. 3. 2",
        editor: {
            imageUrl: faker.image.avatar(),
            name: faker.name.firstName(),
            position: faker.name.jobTitle(),
            content: faker.lorem.paragraphs(5),
        },
    },
    {
        id: faker.datatype.uuid(),
        category: "design",
        thumbnail: images[19],
        title: "우리에게 당연하지만 사용자는 아닌 것들",
        content:
            "사용자 관점에서 본다는 게 엄청난 게 아닌데도, 왠지 엄청난 것으로 개선해야 할 것 같은 느낌이 들 때도 있죠. 그래서 오늘은 사용자 관점을 활용해 개선한 굉장히 가벼운 사례들을 가져와봤어요.",
        createDate: "2023. 1. 19",
        editor: {
            imageUrl: faker.image.avatar(),
            name: faker.name.firstName(),
            position: faker.name.jobTitle(),
            content: faker.lorem.paragraphs(5),
        },
    },
]
export {techArticles, designArticles};
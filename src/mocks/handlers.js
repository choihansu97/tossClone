import {rest} from "msw";

export const handlers = [
    rest.get('/tech', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    id: 1,
                    thumbnail: '1.png',
                    title: '토스 프론트엔드 챕터를 소개합니다!.',
                    content:
                        '토스에서 프론트엔드 개발자가 일하는 방법과 맡고 있는 역할에 대해 소개드립니다.',
                    createDate: '2023,02,01',
                },
                {
                    id: 2,
                    thumbnail: '2.png',
                    title: '웹 서비스 캐시 똑똑하게 다루기',
                    content:
                        '웹 성능을 위해 꼭 필요한 캐시, 제대로 설정하기 쉽지 않습니다. 토스 프론트엔드 챕터에서 올바르게 캐시를 설정하기 위한 노하우를 공유합니다.',
                    createDate: '2023,02,02',
                },
                {
                    id: 3,
                    thumbnail: '3.png',
                    title: 'JSCodeShift로기술 부채 청산하기',
                    content:
                        '기술 부채는 개발할수록 쌓여만 갑니다. 프론트엔드 챕터가 JSCodeShift를 이용하여 순식간에 100개 서비스의 기술 부채를 해결한 경험을 소개합니다.',
                    createDate: '2023,02,03',
                },
                {
                    id: 4,
                    thumbnail: '4.png',
                    title: 'Template Literal Types로 타입 안전하게 코딩하기',
                    content:
                        'TypeScript 코드베이스의 타입 안전성을 한 단계 올려줄 수 있는 Template Literal Type의 뜻과 응용에 대해 알아봅니다.',
                    createDate: '2023,02,04',
                },
                {
                    id: 5,
                    thumbnail: '5.png',
                    title: 'node_modules로부터 우리를 구원해 줄 Yarn Berry',
                    content:
                        '토스 프론트엔드 레포지토리 대부분에서 사용하고 있는 패키지 매니저 Yarn Berry. 채택하게 된 배경과 사용하면서 좋았던 점을 공유합니다.',
                    createDate: '2023,02,05',
                },
                {
                    id: 6,
                    thumbnail: '6.png',
                    title: '개발자의 애질리티',
                    content:
                        '이 글은 토스페이먼츠에 입사하신, 혹은 입사를 고려 중인 개발자분들을 위해 작성된 글입니다. 애자일하게 일한다는 것은 어떠한 의미일까요?.',
                    createDate: '2023,02,06',
                },
                {
                    id: 7,
                    thumbnail: '7.png',
                    title: '조금만 신경써서 초기 렌더링 빠르게 하기(feat. JAM Stack)',
                    content:
                        'SPA(Single Page Application) 구조로 웹 프론트엔드 애플리케이션이 개발되면서 초기 렌더링 속도는 프런트엔드 개발자에게 중요한 과제 중 하나가 되었습니다. 사용자 경험에 영향을 줄 수 있는 가장 큰 요소 중 하나가 바로 속도이기 때문입니다.',
                    createDate: '2023,02,07',
                },
                {
                    id: 8,
                    thumbnail: '8.png',
                    title: '에러 핸들링을 다른 클래스에게 위임하기 (Kotlin 100% 활용).',
                    content:
                        'Kotlin의 Result로 MSA에서 에러가 전파되지 않는 안전한 환경을 만드는 방법을 알아봅니다.',
                    createDate: '2023,02,08',
                },
                {
                    id: 9,
                    thumbnail: '9.png',
                    title: '테스트 의존성 관리로 높은 품질의 테스트 코드 유지하기.',
                    content:
                        '혹시 테스트 코드에서도 의존성을 관리해본 적이 있으실까요? 해당 포스트에서는 Gradle의 java-test-fixtures 플러그인을 사용하여 테스트 의존성 관리를 통해 높은 품질의 테스트 코드를 유지하는 방법을 알아봅니다. ',
                    createDate: '2023,02,09',
                },
                {
                    id: 10,
                    thumbnail: '10.png',
                    title: '토스증권 QA Team을 소개합니다..',
                    content:
                        '이 글은 토스증권 QA Team에 입사를 고려중인 지원자들을 위해 작성된 글입니다. 토스증권 QA MANAGER하는 역활과 일하는 방식은 어떻게 다를까요?',
                    createDate: '2023,02,10',
                },
            ])
        );
    }),

    rest.get('/design', (req,res,ctx) => {
        return res(
            ctx.status = 200,
            ctx.json([
                {
                    id: 11,
                    thumbnail: '11.png',
                    title: '거꾸로 입력하는 가입 화면, 처음에 어떻게 떠올렸을까?',
                    content:
                        '토스의 회원 가입 화면에선 스크롤을 내릴 필요가 없어요. 필요한 정보들을 거꾸로 입력하기 때문이죠. 어색하지 않을까 걱정했지만, 이제는 업계의 표준이 되었죠. 많은 앱에서 이 형태를 적용하고 있어요. 처음 이 화면을 디자인하게 된 과정을 소개해드릴게요.',
                    createDate: '2022. 9. 20',
                },

                {
                    id: 12,
                    thumbnail: '12.png',
                    title: '좋은 에러 메시지를 만드는 6가지 원칙',
                    content:
                        '좋은 에러 메시지란, 사용자가 다음 단계로 갈 수 있게 돕는 메시지예요. 사용자가 다음 단계로 가기 위해 필요한 내용은 어떤 것들이 있을까요? 토스는 6가지 에러 메시지 원칙을 생각하며 문구를 쓰고 있어요.',
                    createDate: '2022. 9. 21',
                },

                {
                    id: 13,
                    thumbnail: '13.png',
                    title: '디자이너의, 디자이너에 의한, 디자이너를 위한 채용 설계하기',
                    content:
                        '디자이너가 디자이너 채용을 기획한다면 어떻게 될까요? 프로덕트 디자이너 챌린지는 지원자인 디자이너의 입장에서 기획한 채용이에요. 회사가 어떻게 지원자를 검증할지만 생각한 게 아니라, 어떻게 하면 지원자의 역량을 잘 끌어낼 수 있을지 생각하며 3가지 방법을 선택했어요.',
                    createDate: '2022. 9. 22',
                },

                {
                    id: 14,
                    thumbnail: '14.png',
                    title: '경험이 부족한 나도 토스에 지원해도 될까?',
                    content:
                        '이력서, 포트폴리오가 아닌 과제 중심으로 역량을 평가한 프로덕트 디자이너 챌린지. 신입이라 선뜻 지원을 못했었는데, 챌린지를 통해 입사할 수 있었어요. 챌린지에 참여하게 된 계기와 문제를 해결하면서 고민했던 부분들, 장표를 어떻게 구성했는지까지 자세한 후기를 공유해드릴게요.',
                    createDate: '2022. 10. 4',
                },

                {
                    id: 15,
                    thumbnail: '15.png',
                    title: '2초만에 불필요한 클릭 없애는 4가지 방법',
                    content:
                        '토스 앱에는 little big detail 이 많은데요, 그중 하나를 소개하고 싶어요. 바로 불필요한 클릭 없애는 방법이에요.',
                    createDate: '2022. 10. 20',
                },

                {
                    id: 16,
                    thumbnail: '16.png',
                    title: '가이드라인을 시스템으로 만드는 법',
                    content:
                        'UX 라이팅은 한 명이 아닌, 팀원 모두가 잘 쓰는 게 중요해요. 이전까지는 세션이나 가이드라인 등의 방법으로 이 문제를 접근해왔지만, 토스는 조금 다르게 풀어봤어요. 시스템으로요.',
                    createDate: '2022. 11. 4',
                },

                {
                    id: 17,
                    thumbnail: '17.png',
                    title: '토스의 8가지 라이팅 원칙들',
                    content:
                        '토스의 문구는 8가지 라이팅 원칙을 고려하면서 쓰고 있어요. 사람이 말하는 것 같은 문장을 지향하면서요.',
                    createDate: '2022. 11. 15',
                },

                {
                    id: 18,
                    thumbnail: '18.png',
                    title: '직접 만지고, 돌리는 토스뱅크카드 인터랙션',
                    content:
                        '토스뱅크카드의 중요한 디자인 컨셉은 앞면과 뒷면의 색상이 다르다는 것인데요. 지금까지는 이 정보를 표현하기 위해서 이미지를 두 장 쓰거나, 영상을 만들었죠. 하지만 그걸로는 부족했어요. 저는 모바일 화면에서도 실물 카드를 보는 것과 똑같은 경험을 만들고 싶었어요.',
                    createDate: '2022. 11. 24',
                },

                {
                    id: 19,
                    thumbnail: '19.png',
                    title: '토스에 처음 입사한 디자이너를 위한 온보딩 프로그램',
                    content:
                        '토스 디자인 챕터는 온보딩을 위한 다양한 프로그램이 있어요. 디자이너가 직접 설계한 디자이너 온보딩, 어떤 것들을 신경 썼는지 하나씩 소개해드릴게요.',
                    createDate: '2022. 12. 1',
                },

                {
                    id: 20,
                    thumbnail: '20.png',
                    title: '플랫폼 디자이너가 효율을 만들어내는 법',
                    content:
                        '수많은 가짓수들을 단순히 더하기로 추가하는 것이 아니라 곱하기로 확장하면서 극단적인 효율과 심미성까지 챙겼던 과정들을 플로우차트 제작 프로젝트를 예시로 소개해드릴게요.',
                    createDate: '2022. 12. 18',
                },

            ])
        )
    }),


    rest.get('/article/:id', (req, res, ctx) => {
        const { id } = req.params;
        return res(
            ctx.status(200),
            ctx.json({
                id: `${id}`,
                thumbnail: `${id}.png`,
                title: `콘텐츠내용입니다.`,
                content: `콘텐츠${id}입니다.`,
                createDate: `2023,02,${id}`,
            })
        );
    }),
];


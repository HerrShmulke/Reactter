import { gql, useQuery } from '@apollo/client';

const POSTS_QUERY = gql`
  query {
    posts {
      id
      message
    }
  }
`;

export function getAllPosts(shift) {
  const { loading, error, data } = useQuery(POSTS_QUERY);

  return [
    {
      id: 0,
      avatarUrl: '/avatar.png',
      authorName: 'Joe Doe',
      commentsCount: 0,
      likesCount: 1,
      isLikes: true,
      message: `Но новая модель организационной деятельности говорит о возможностях приоритизации разума над эмоциями. Внезапно, тщательные исследования конкурентов, вне зависимости от их уровня, должны быть подвергнуты целой серии независимых исследований.`,
    },
    {
      id: 1,
      avatarUrl: '/avatar.png',
      authorName: 'Tom One',
      commentsCount: 13,
      likesCount: 3,
      isLikes: false,
      message: `Но укрепление и развитие внутренней структуры позволяет выполнить важные задания по разработке прогресса профессионального сообщества.`,
    },
  ];
}

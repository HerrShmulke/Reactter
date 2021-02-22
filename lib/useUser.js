export default function useUser() {
  return {
    user: {
      name: 'Tom One',
      avatarUrl: '/avatar.png',
    },
    mutateUser: true,
  };
}

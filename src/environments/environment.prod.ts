export const environment = {
  production: true
};

export const SpotifyConfiguration = {
  clientId: 'a5f4ca99abb64492ab2df40cab228226',
  authEndPoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scopes: [
    "user-read-currently-playing", // musica tocando agora.
    "user-read-recently-played", // ler musicas tocadas recentemente
    "user-read-playback-state", // ler estado do player do usuário
    "user-top-read", // top artistas e musicas do usuário
    "user-modify-playback-state", // alterar do player do usuário.
    "user-library-read", // ler biblioteca dos usuários
    "playlist-read-private", // ler playlists privadas
    "playlist-read-collaborative" // ler playlists colaborativas
  ]
}

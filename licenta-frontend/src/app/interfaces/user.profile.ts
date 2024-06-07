export interface UserProfile {
  username: string;
  images: Image[];
  country: string;
  email: string;
  userId: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

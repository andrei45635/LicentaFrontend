import {Image} from "./user.profile";

export interface PlaylistDTO {
  name: string;
  uri: string;
  id: string;
  description: string;
  images: Image;
}

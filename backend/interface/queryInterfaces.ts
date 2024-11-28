export interface getMagazines {
  id: number;
  title: string;
  description: string;
  image: string;
  character: string;
  publisher_name: string;
  publisherId: number;
}

export interface postMagazine {
  title: string;
  description: string;
  image: string;
  character: string;
  publisherid: number;
}

export interface publisher {
  name: string;
  id: number;
}

export interface deleteMagazine {
  id: number
}
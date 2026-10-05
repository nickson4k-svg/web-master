export interface Post {
  id: string;
  img: string;
  location: string;
  caption: string;
  likes: number;
  comments: number;
}

export interface Story {
  img: string;
  caption: string;
}

export interface QuickReply {
  text: string;
  reply: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'blogger';
  text: string;
  isCta?: boolean;
}

export interface Blogger {
  id: 'kai' | 'adrian' | 'elena' | 'mia';
  name: string;
  handle: string;
  niche: string;
  category: 'sport' | 'tech' | 'fashion' | 'art';
  highlight: string;
  followers: string;
  er: string;
  bio: string;
  tags: string[];
  portraitLocal: string;
  story: Story;
  stories: Story[];
  posts: Post[];
  chat: {
    greeting: string;
    quickReplies: QuickReply[];
  };
}

export type CategoryFilter = 'all' | 'sport' | 'tech' | 'fashion' | 'art';

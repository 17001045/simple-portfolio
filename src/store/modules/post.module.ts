import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { IPost, IPostForm } from '@/modules/post/post.interface';
import postRequest from '@/modules/post/post.service';

@Module({ namespaced: true, name: 'postModule' })
export default class PostModule extends VuexModule {
  posts: IPost[] = [];
  postSelected: IPost = {
    categories: [],
    content: '',
    img: '',
    tags: [],
    title: '',
  };
  postForm: IPostForm = {
    content: '<h3>content.....</h3>',
    img: '',
    tags: [],
    title: '',
    categories: [],
  };

  @Action({ commit: 'getPostsMutation' })
  async getPostsAction(): Promise<IPost[]> {
    return (await postRequest.findAll()).data;
  }
  @Mutation
  private getPostsMutation(posts: IPost[]): void {
    this.posts = posts;
  }

  @Action({ commit: 'getPostMutation' })
  async getPostAction(id: string): Promise<IPost> {
    return (await postRequest.findOne(id)).data;
  }
  @Mutation
  private getPostMutation(post: IPost): void {
    this.postSelected = post;
  }

  @Mutation
  postsForCategorie(posts: IPost[] | any): void {
    this.posts = posts;
  }
}

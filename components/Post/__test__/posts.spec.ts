import { mount } from '@vue/test-utils'
import Posts from '~/components/Post/organism/Posts.vue'
import { IPost } from '~/types/data'
import { postTestData1 } from '~/components/Post/__test__/postContent.spec'

const post1 = {
  content: 'test123',
  writer: 'testwriter',
  createdAt: new Date('2020-10-09'),
  title: 'testTitle',
}

export const posts: IPost[] = [
  {
    content: 'test123',
    writer: 'testwriter',
    createdAt: new Date('2020-10-09'),
    title: 'testTitle',
  },
  postTestData1,
]

// const mockGetEntries = () => {
//   return new Promise((resolve) => {
//     resolve({
//       items: [
//         {
//           fields: post1,
//         },
//         {
//           fields: postTestData1,
//         },
//       ],
//     })
//   })
// }

describe('posts Component test', () => {
  const wrapper: any = mount(Posts, {
    propsData: {
      posts,
    },
    stubs: ['PostContent'],
  })

  it('posts sorts is correct', () => {
    expect(wrapper.vm.sortPost[0].title).toEqual('testTitle')
  })
})

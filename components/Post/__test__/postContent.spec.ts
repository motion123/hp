import { mount } from '@vue/test-utils'
import { IPost } from '~/types/data'
import dayjs from 'dayjs'
import PostContent from '~/components/Post/molecules/PostContent.vue'

export const postTestData1: IPost = {
  content: 'test',
  title: 'テスト1',
  createdAt: new Date('2020-10-10'),
  writer: 'test作者1',
}

const dayjsFunc = (date: Date) => dayjs(date)

describe('PostViewer test', () => {
  const wrapper: any = mount(PostContent, {
    propsData: {
      postData: postTestData1,
    },
    mocks: {
      $dayjs: dayjsFunc,
    },
  })

  it('renders the correct title', () => {
    expect(wrapper.html()).toContain('<h1 class="title">テスト1</h1>')
  })

  it('renders the correct content', () => {
    expect(wrapper.html()).toContain('<p class="content">test</p>')
  })

  it('renders the correct time', () => {
    expect(wrapper.html()).toContain('2020/10/10')
  })
})

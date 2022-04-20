const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
   post_text: 'Donec posuere metus vitae ipsum. Donec posuere metus vitae ipsum. Donec posuere metus vitae ipsum. Donec posuere metus vitae ipsum.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
   post_text: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
   post_text: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
   post_text: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
   post_text: 'Pellentesque eget nunc.Pellentesque eget nunc.Pellentesque eget nunc.Pellentesque eget nunc.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
   post_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
   post_text: 'In hac habitasse platea dictumst.In hac habitasse platea dictumst.In hac habitasse platea dictumst.In hac habitasse platea dictumst.In hac habitasse platea dictumst.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'Morbi non quam nec dui luctus rutrum.Morbi non quam nec dui luctus rutrum.Morbi non quam nec dui luctus rutrum.Morbi non quam nec dui luctus rutrum.Morbi non quam nec dui luctus rutrum.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_text: 'Duis ac nibh.Duis ac nibh.Duis ac nibh.Duis ac nibh.Duis ac nibh.Duis ac nibh.Duis ac nibh.Duis ac nibh.Duis ac nibh.Duis ac nibh.Duis ac nibh.Duis ac nibh.Duis ac nibh.Duis ac nibh.Duis ac nibh.Duis ac nibh.',
    user_id: 9
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

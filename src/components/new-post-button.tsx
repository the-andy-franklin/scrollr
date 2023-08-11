"use client";
import { FormEvent, useState } from 'react';
import { useRefresh } from '../app/context/refresh';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const NewPostButton = () => {
  const { triggerRefresh } = useRefresh();
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        content,
      }),
    });

    setIsOpen(false);
    setTitle('');
    setContent('');
    triggerRefresh();
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="
          text-white
          bg-blue-500
          active:bg-blue-600
          px-4 py-2
          rounded
        "
      >
        New Post
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            backgroundColor: 'rgb(31, 41, 55)',
            width: '32rem',
            height: '32rem',
            margin: 'auto',
          },
        }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 h-full">
          <label className="text-xl">
            Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-black rounded"
          />
          <label className="text-xl">
            Content:
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="text-black rounded"
            rows={12}
          />
          <button
            type="submit"
            className="
              w-36
              self-end
              bg-blue-500
              active:bg-blue-600
              text-white
              font-bold
              py-2
              px-4
              rounded
              mt-auto
            "
          >
            Create Post
          </button>
        </form>
      </Modal>
    </>
  );
};

export default NewPostButton;

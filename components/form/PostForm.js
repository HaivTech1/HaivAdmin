import {
  CogIcon,
  EyeIcon,
  PlayIcon,
  SaveAsIcon,
  SaveIcon,
} from '@heroicons/react/solid';
import Textarea from '../../components/form/Textarea';
import { useEffect, useState } from 'react';
import toast, { LoaderIcon } from 'react-hot-toast';
import Image from 'next/image';
import MarkHint from '../../components/MarkHint';
import DeviceView from '../../components/DeviceView';
import TextInput from './TextInput';
import { useAdmin } from '../../lib/provider/context';
import Label from './Label';

export const defaultPost = {
  title: '',
  subtitle: '',
  content: '',
  tags: ' ',
  meta: '',
  thumbnail: '',
  featured: false,
};

const PostForm = ({
  initialPost,
  busy,
  postBtnTitle,
  resetAfterSubmit,
  postTitle,
  onSubmit,
}) => {
  const { user } = useAdmin();
  const [postInfo, setPostInfo] = useState({ ...defaultPost });
  const [selectedImageURL, setSelectedImageURL] = useState('');
  const [imageUrlToCopy, setImageUrlToCopy] = useState('');
  const [imageUploading, setImageUploading] = useState(false);
  const [displayMarkdownHint, setDisplayMarkdownHint] = useState(false);
  const [showDeviceView, setShowDeviceView] = useState(false);

  useEffect(() => {
    if (initialPost) {
      setPostInfo({ ...initialPost });
      setSelectedImageURL(initialPost?.thumbnail);
    }
    setPostInfo({ ...initialPost });
    return () => {
      if (resetAfterSubmit) resetForm();
    };
  }, [initialPost, resetAfterSubmit]);

  const { title, subtitle, content, tags, meta, featured, thumbnail } =
    postInfo;

  const handleChange = ({ target }) => {
    const { value, name, checked } = target;

    if (name === 'thumbnail') {
      const file = target.files[0];
      if (!file.type.includes('image')) {
        toast.error('This is not an image');
        console.log('This is not an image');
      }
      setPostInfo({ ...postInfo, thumbnail: file });
      return setSelectedImageURL(URL.createObjectURL(file));
    }

    if (name === 'featured') {
      localStorage.setItem(
        'postStore',
        JSON.stringify({ ...postInfo, featured: checked })
      );
      return setPostInfo({ ...postInfo, [name]: checked });
    }

    if (name === 'tags') {
      const newTags = tags?.split(', ');
      if (newTags?.length > 4) toast.error('Only first 4 will be selected');
      console.log('Only first 4 will be selected');
    }

    if (name === 'meta') {
      return setPostInfo({
        ...postInfo,
        meta: value.substring(0, 149),
      });
    }

    const newPost = { ...postInfo, [name]: value };

    setPostInfo({ ...newPost });

    localStorage.setItem('postStore', JSON.stringify(newPost));
  };

  const handleImageUpload = async ({ target }) => {
    if (imageUploading) return;
    const file = target.files[0];

    if (!file.type.includes('image')) {
      toast.error('This is not an image!');
      console.log('This is not an image!');
    }

    setImageUploading(true);

    const formData = new FormData();
    formData.append('thumbnail', file);
    console.log(formData);
    const { error, thumbnail } = await uploadImage(formData);
    setImageUploading(false);
    if (error) toast.error(error);
    setImageUrlToCopy(thumbnail);
  };

  const handleOnCopy = () => {
    const textToCopy = `![Add image description] (${imageUrlToCopy})`;
    navigator.clipboard.writeText(textToCopy);
    toast.success('Copied');
  };

  const handleSubmit = (e) => {
    const { id } = user;
    e.preventDefault();
    const { title, subtitle, content, tags, meta } = postInfo;

    if (!title.trim()) return toast.error('Title is missing');
    if (!subtitle.trim()) return toast.error('Subtitle is missing');
    if (!meta.trim()) return toast.error('Meta description is missing');
    if (!content.trim()) return toast.error('Content is missing');

    const slug = title
      .toLowerCase()
      .replace(/[^a-zA-Z]/g, ' ')
      .split(' ')
      .filter((item) => item.trim())
      .join('-');

    const newTags = tags
      .split(', ')
      .map((item) => item.trim())
      .splice(0, 4);

    const formData = new FormData();

    const finalPost = {
      ...postInfo,
      tags: JSON.stringify(newTags),
      slug,
      userId: id,
    };

    for (let key in finalPost) {
      formData.append(key, finalPost[key]);
    }

    onSubmit(formData);
    if (resetAfterSubmit) resetForm();
  };

  const resetForm = () => {
    setPostInfo({ ...defaultPost });
    localStorage.removeItem('postStore');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className=" p-4 rounded-lg">
            {/* action buttons */}
            <div className="flex flex-wrap justify-end mx-6 my-2">
              <button
                onClick={resetForm}
                type="button"
                className="flex items-center space-x-2 px-3 hover:text-white hover:bg-primary-500 ring-1 ring-primary-500 rounded h-10 transition"
              >
                <CogIcon className="w-6 h-6" />
                <span>Reset</span>
              </button>

              <button
                onClick={() => setShowDeviceView(true)}
                type="button"
                className="flex items-center space-x-2 px-3 hover:text-white hover:bg-primary-500 ring-1 ring-primary-500 rounded h-10 transition"
              >
                <EyeIcon className="w-6 h-6" />
                <span>View</span>
              </button>

              <button className="flex items-center space-x-2 px-3  text-primary-700 hover:bg-primary-500 ring-1 ring-primary-500 rounded h-10 transition">
                <SaveAsIcon className="w-6 h-6" />
                <span>{busy ? <LoaderIcon /> : postBtnTitle}</span>
              </button>
            </div>

            {/* featured checkbox */}
            <div className="flex mx-8 my-5">
              <input
                id="featured"
                type="checkbox"
                name="featured"
                value={featured}
                onChange={handleChange}
                hidden
              />
              <label
                className="select-none flex items-center space-x-2 text-primary-500 cursor-pointer group"
                htmlFor="featured"
              >
                <div className="w-4 h-4 rounded-full border-2 border-primary-500 flex items-center justify-center group-hover:border-primary-700">
                  {featured && (
                    <div className="w-2 h-2 rounded-full bg-primary-500 group-hover:bg-secondary-500" />
                  )}
                </div>
                <span className="group-hover: text-primary-500">
                  Make Featured
                </span>
              </label>
            </div>

            {/* place image div */}
            <div className="flex space-x-2">
              <div>
                <input
                  id="image-input"
                  type="file"
                  onChange={handleImageUpload}
                  hidden
                />
                <label
                  htmlFor="image-input"
                  className="flex items-center space-x-2 px-3 text-primary hover:text-white hover:bg-secondary ring-1 ring-primary rounded h-10 transition cursor-pointer"
                >
                  <span>Place Image</span>
                  {!imageUploading ? (
                    <PlayIcon className="w-6 h-6" />
                  ) : (
                    <LoaderIcon />
                  )}
                </label>
              </div>
              {imageUrlToCopy && (
                <div className="flex-1 flex bg-gray-400 justify-between rounded overflow-hidden">
                  <input
                    value={imageUrlToCopy}
                    type="text"
                    className="bg-transparent px-2 text-white w-full"
                    disabled
                  />
                  <button
                    onClick={handleOnCopy}
                    type="button"
                    className="text-xs flex justify-center items-center flex-col self-stretch p-1 bg-gray-700 text-white"
                  >
                    <SaveIcon className="w-6 h-6" />
                    <span>Copy</span>
                  </button>
                </div>
              )}
            </div>

            <div className="">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 m-4">
                <div className="">
                  <Label htmlFor="grid-password">Title</Label>

                  <TextInput
                    id="title"
                    name="title"
                    type="text"
                    value={title}
                    placeholder="Title"
                    onChange={handleChange}
                    onFocus={() => setDisplayMarkdownHint(false)}
                  />
                </div>

                <div className="">
                  <Label htmlFor="grid-password">Subtitle</Label>

                  <TextInput
                    id="subtitle"
                    name="subtitle"
                    type="text"
                    value={subtitle}
                    placeholder="Subtitle"
                    onChange={handleChange}
                    onFocus={() => setDisplayMarkdownHint(false)}
                  />
                </div>

                <div className="">
                  <Label htmlFor="grid-password">
                    Meta {meta?.length} / 150
                  </Label>

                  <TextInput
                    id="meta"
                    name="meta"
                    type="text"
                    value={meta}
                    placeholder="meta"
                    onChange={handleChange}
                    onFocus={() => setDisplayMarkdownHint(false)}
                  />
                </div>
                <div className="">
                  <Label htmlFor="grid-password">tags</Label>

                  <TextInput
                    value={tags}
                    id="tags"
                    name="tags"
                    type="text"
                    placeholder="tags"
                    onChange={handleChange}
                    onFocus={() => setDisplayMarkdownHint(false)}
                  />
                </div>
              </div>

              {/* content textarea */}
              <div className="flex-1 mx-6 space-x-4">
                <Textarea
                  name="content"
                  value={content}
                  onFocus={() => setDisplayMarkdownHint(true)}
                  onChange={handleChange}
                  placeholder="Type in Post content"
                  rows="15"
                  cols="23"
                />
              </div>
            </div>
          </div>

          <div className="relative px-2">
            <h1 className="text-xl font-semibold text-gray-700 mb-2">
              Image Thumbnail
            </h1>

            <div>
              <input
                onChange={handleChange}
                name="thumbnail"
                type="file"
                id="thumbnail"
                hidden
              />
              <label className="cursor-pointer" htmlFor="thumbnail">
                {selectedImageURL ? (
                  <Image
                    src={selectedImageURL}
                    alt="Selected image"
                    width={300}
                    height={200}
                    className="aspect-video shadow-sm rounded"
                    onFocus={() => setDisplayMarkdownHint(false)}
                  />
                ) : (
                  <div className="border border-dashed border-gray-500 aspect-video text-gray-500 flex flex-col justify-center items-center">
                    <span>Select Image</span>
                    <span className="text-xs">Recommended size</span>
                    <span className="text-xs">1280 * 720</span>
                  </div>
                )}
              </label>
            </div>

            {/* markdown rules */}
            <div className="absolute top-1/2 -translate-y-1/2 ">
              {displayMarkdownHint && <MarkHint />}
            </div>
          </div>
        </div>
      </form>
      <DeviceView
        thumbnail={selectedImageURL}
        title={title}
        content={content}
        visible={showDeviceView}
        onClose={() => setShowDeviceView(false)}
      />
    </div>
  );
};

export default PostForm;

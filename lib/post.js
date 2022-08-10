import client from './client';

export const getPost = async (pageNo, limit, userId) => {
  try {
    const { data } = await client(`/post?pageNo=${pageNo}&limit=${limit}`);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const deletePost = async (postId) => {
  try {
    const { data } = await client.delete(`/dashboard/post/${postId}`);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const searchPost = async (query) => {
  try {
    const { data } = await client(`/post/search?title=${query}`);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const uploadImage = async (formData) => {
  try {
    console.log(formData);
    const { data } = await client.post(
      '/dashboard/post/upload-image',
      formData
    );
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const createPost = async (formData) => {
  try {
    const { data } = await client.post('/dashboard/post/create', {
      formData,
      userId: '62deb28c1bff7c3cc6755fae',
    });
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const getSinglePost = async (slug) => {
  try {
    const { data } = await client(`/post/single/${slug}`);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const updatePost = async (postId, formData) => {
  try {
    console.log(postId);
    const { data } = await client.put(`/dashboard/post/${postId}`, formData);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
      console.log(response.data);
    }
    return { error: error.message || error };
  }
};

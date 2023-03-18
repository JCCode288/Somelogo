import {
  PRODUCT,
  PRODUCTS,
  USERS,
  CATEGORIES,
  BASE_URL,
  PRODUCTS_LOADING,
  USERS_LOADING,
  CATEGORIES_LOADING,
  PRODUCT_LOADING,
  CATEGORY,
  CATEGORY_LOADING,
} from "./actionType";

export const fetchProductsSuccess = (payload) => ({
  type: PRODUCTS,
  payload,
});
export const productsLoading = (payload) => ({
  type: PRODUCTS_LOADING,
  payload,
});
export const fetchUsersSuccess = (payload) => ({
  type: USERS,
  payload,
});
export const userLoading = (payload) => ({
  type: USERS_LOADING,
  payload,
});
export const registerLoading = (payload) => ({
  type: USERS_LOADING,
  payload,
});
export const fetchCategoriesSuccess = (payload) => ({
  type: CATEGORIES,
  payload,
});
export const categoriesLoading = (payload) => ({
  type: CATEGORIES_LOADING,
  payload,
});
export const fetchCategorySuccess = (payload) => ({
  type: CATEGORY,
  payload,
});
export const categoryLoading = (payload) => ({
  type: CATEGORY_LOADING,
  payload,
});
export const fetchProductSuccess = (payload) => ({
  type: PRODUCT,
  payload,
});
export const productLoading = (payload) => ({
  type: PRODUCT_LOADING,
  payload,
});

export function postUser(payload) {
  return async (dispatch) => {
    try {
      dispatch(registerLoading(true));
      const res = await fetch(`${BASE_URL}/register`, {
        method: "post",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw await res.text();
      }

      let data = await res.json();

      localStorage.access_token = data.access_token;
      localStorage.username = data.username;

      dispatch(registerLoading(false));
    } catch (err) {
      dispatch(registerLoading(false));
      throw JSON.parse(err);
    }
  };
}

export function fetchProducts() {
  return async (dispatch) => {
    try {
      dispatch(productsLoading(true));
      let res = await fetch(`${BASE_URL}/`);
      if (!res.ok) {
        throw await res.text();
      }
      let data = await res.json();

      dispatch(fetchProductsSuccess(data));
      dispatch(productsLoading(false));
    } catch (err) {
      dispatch(productsLoading(false));
      throw JSON.parse(err);
    }
  };
}

export function fetchProduct(id) {
  return async (dispatch) => {
    try {
      dispatch(productLoading(true));
      let res = await fetch(`${BASE_URL}/${id}`);
      if (!res.ok) {
        throw await res.text();
      }
      let data = await res.json();

      dispatch(fetchProductSuccess(data));
      dispatch(productLoading(false));
    } catch (err) {
      dispatch(productLoading(false));
      throw JSON.parse(err);
    }
  };
}

export function fetchCategories() {
  return async (dispatch) => {
    try {
      dispatch(categoriesLoading(true));
      let res = await fetch(`${BASE_URL}/categories`);
      if (!res.ok) {
        throw await res.text();
      }
      let data = await res.json();

      dispatch(fetchCategoriesSuccess(data));
      dispatch(categoriesLoading(false));
    } catch (err) {
      dispatch(categoriesLoading(false));
      throw JSON.parse(err);
    }
  };
}

export function fetchCategory(id) {
  return async (dispatch) => {
    try {
      dispatch(categoryLoading(true));
      let res = await fetch(BASE_URL + "/categories/" + id);

      if (!res.ok) {
        throw await res.text();
      }

      let data = await res.json();

      dispatch(fetchCategorySuccess(data));
      dispatch(categoryLoading(false));
    } catch (err) {
      dispatch(categoryLoading(false));
      throw JSON.parse(err);
    }
  };
}

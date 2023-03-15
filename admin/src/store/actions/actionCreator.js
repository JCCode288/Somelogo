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
export const fetchCategoriesSuccess = (payload) => ({
  type: CATEGORIES,
  payload,
});
export const categoriesLoading = (payload) => ({
  type: CATEGORIES_LOADING,
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

export function fetchUsers() {
  return async (dispatch) => {
    try {
      dispatch(userLoading(true));
      let res = await fetch(`${BASE_URL}/users`);
      if (!res.ok) {
        throw await res.text();
      }
      let data = await res.json();

      dispatch(fetchUsersSuccess(data));
      dispatch(userLoading(false));
    } catch (err) {
      console.log(err);
    }
  };
}

export function fetchProducts() {
  return async (dispatch) => {
    dispatch(productsLoading(true));
    let res = await fetch(`${BASE_URL}/products`);
    if (!res.ok) {
      throw await res.text();
    }
    let data = await res.json();

    dispatch(fetchProductsSuccess(data));
    dispatch(productsLoading(false));
  };
}

export function fetchProduct(id) {
  return async (dispatch) => {
    dispatch(productLoading(true));
    let res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) {
      throw await res.text();
    }
    let data = await res.json();

    dispatch(fetchProductSuccess(data));
    dispatch(productLoading(false));
  };
}

export function postProduct(payload) {
  return async () => {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "post",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("failed to add new product");
    }
  };
}

export function fetchCategories() {
  return async (dispatch) => {
    dispatch(categoriesLoading(true));
    let res = await fetch(`${BASE_URL}/categories`);
    if (!res.ok) {
      throw await res.text();
    }
    let data = await res.json();

    dispatch(fetchCategoriesSuccess(data));
    dispatch(categoriesLoading(false));
  };
}

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
      dispatch(userLoading(false));
      throw err.text();
    }
  };
}

export function postUser(payload) {
  return async (dispatch) => {
    try {
      dispatch(registerLoading(true));
      await fetch(`${BASE_URL}/users`, {
        method: "post",
        body: payload,
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(registerLoading(false));
    } catch (err) {
      dispatch(registerLoading(false));
      throw err.text();
    }
  };
}

export function fetchProducts() {
  return async (dispatch) => {
    try {
      dispatch(productsLoading(true));
      let res = await fetch(`${BASE_URL}/products`);
      if (!res.ok) {
        throw await res.text();
      }
      let data = await res.json();

      dispatch(fetchProductsSuccess(data));
      dispatch(productsLoading(false));
    } catch (err) {
      dispatch(productsLoading(false));
      throw err.text();
    }
  };
}

export function fetchProduct(id) {
  return async (dispatch) => {
    try {
      dispatch(productLoading(true));
      let res = await fetch(`${BASE_URL}/products/${id}`);
      if (!res.ok) {
        throw await res.text();
      }
      let data = await res.json();

      dispatch(fetchProductSuccess(data));
      dispatch(productLoading(false));
    } catch (err) {
      dispatch(productLoading(false));
      throw err.text();
    }
  };
}

export function postProduct(payload) {
  return async () => {
    try {
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
    } catch (err) {
      throw err.text();
    }
  };
}

export function putProduct(id, payload) {
  return async () => {
    try {
      const res = await fetch(`${BASE_URL}/products/${id}`, {
        method: "put",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error("failed to update product");
    } catch (err) {
      throw err.text();
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
      throw err.text();
    }
  };
}

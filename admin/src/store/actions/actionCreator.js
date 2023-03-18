import {
  PRODUCT,
  PRODUCTS,
  CATEGORIES,
  BASE_URL,
  PRODUCTS_LOADING,
  LOGIN_LOADING,
  CATEGORIES_LOADING,
  PRODUCT_LOADING,
  REGISTER_LOADING,
} from "./actionType";

export const fetchProductsSuccess = (payload) => ({
  type: PRODUCTS,
  payload,
});
export const productsLoading = (payload) => ({
  type: PRODUCTS_LOADING,
  payload,
});
export const loginLoading = (payload) => ({
  type: LOGIN_LOADING,
  payload,
});
export const registerLoading = (payload) => ({
  type: REGISTER_LOADING,
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

export function login(payload) {
  return async (dispatch) => {
    try {
      dispatch(loginLoading(true));

      let res = await fetch(`${BASE_URL}/login`, {
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

      dispatch(loginLoading(false));
    } catch (err) {
      dispatch(loginLoading(false));
      console.log(err);
      throw JSON.parse(err);
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
          access_token: localStorage.access_token,
        },
      });

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
      let res = await fetch(`${BASE_URL}/products`, {
        method: "get",
        headers: {
          access_token: localStorage.access_token,
        },
      });
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
      let res = await fetch(`${BASE_URL}/products/${id}`, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
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

export function postProduct(payload) {
  return async () => {
    try {
      const response = await fetch(`${BASE_URL}/products`, {
        method: "post",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      });
      if (!response.ok) {
        throw await response.text();
      }
      let data = await response.json();
      return `${data.name} has been created`;
    } catch (err) {
      throw JSON.parse(err);
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
          access_token: localStorage.access_token,
        },
      });

      if (!res.ok) {
        throw await res.text();
      }
      let data = await res.json();
      return `product ${data.name} has been edited`;
    } catch (err) {
      throw JSON.parse(err);
    }
  };
}

export function deleteProduct(id) {
  return async function (dispatch) {
    try {
      let res = await fetch(`${BASE_URL}/products/${id}`, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      });

      if (!res.ok) {
        throw await res.text();
      }

      let data = await res.json();

      await dispatch(fetchProducts());
      return data.message;
    } catch (err) {
      console.log(err);
      throw JSON.parse(err);
    }
  };
}

export function fetchCategories() {
  return async (dispatch) => {
    try {
      dispatch(categoriesLoading(true));
      let res = await fetch(`${BASE_URL}/categories`, {
        method: "get",
        headers: {
          access_token: localStorage.access_token,
        },
      });

      if (!res.ok) {
        throw await res.text();
      }

      let data = await res.json();

      dispatch(fetchCategoriesSuccess(data));
      dispatch(categoriesLoading(false));
    } catch (err) {
      throw JSON.parse(err);
    }
  };
}

export function deleteCategory(id) {
  return async (dispatch) => {
    try {
      let res = await fetch(`${BASE_URL}/categories/${id}`, {
        method: "delete",
        headers: {
          access_token: localStorage.access_token,
        },
      });

      if (!res.ok) {
        throw await res.text();
      }

      let data = await res.json();

      await dispatch(fetchCategories());

      return data.message;
    } catch (err) {
      throw JSON.parse(err);
    }
  };
}

export function postCategory(payload) {
  return async (dispatch) => {
    try {
      let res = await fetch(`${BASE_URL}/categories`, {
        method: "post",
        body: JSON.stringify(payload),
        headers: {
          access_token: localStorage.access_token,
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw await res.text();
      }

      let data = await res.json();

      await dispatch(fetchCategories());
      return `category of ${data.name} is created`;
    } catch (err) {
      throw JSON.parse(err);
    }
  };
}

export const authlogin = async (email, password) => {
  try {
    const response = await fetch("users.json");
    const data = await response.json();
    const ans = data.filter(
      (item) => item.email === email && item.password === password
    );
    //console.group("the auth is " + ans);
    return ans[0].email;
  } catch (error) {
    console.error(error);
  }
};

export const authsignup = async (useremail, userpassword, userrepassword) => {
  try {
    const response = await fetch("users.json", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: useremail, password: userpassword }),
    });
    console.log(response);
    console.log("Data written successfully");
  } catch (error) {
    console.error(error);
  }
};

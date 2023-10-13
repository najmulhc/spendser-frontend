const postResource = async ({
  type,
  name,
  token,
}: {
  type: "withdraw" | "deposit";
  name: string;
  token: string;
}) => {
 

  const response = await fetch(
    "https://viridian-pelican-belt.cyclic.app/user/resources",
    {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        token: `${token}`,
      },
      body: JSON.stringify({
        type,
        name,
      }),
    }
  );
  const data = await response.json();
  console.log(data)
  if (data.success === true) {
    const returnedData = [];
    for (let element of data.resources) {
      returnedData.push(element.name);
    }
    return returnedData;
  }

};
export default postResource;

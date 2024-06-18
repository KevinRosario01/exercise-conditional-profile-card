import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector(
    "#widget_content"
  ).innerHTML = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<div class="relative m-auto mt-8 flex h-[450px] w-[350px] flex-col rounded-xl bg-white shadow">
  <div class="relative h-1/2 bg-red-500 rounded-t-xl bg-[url(${
    variables.background
  })] bg-center bg-cover bg-no-repeat" >

      <div class="absolute bottom-0 ${
        variables.socialMediaPosition === "position-left"
          ? "right-full"
          : "left-full"
      } top-0 flex flex-col justify-center text-2xl"	>
      ${
        variables.twitter
          ? '<a class="hover:bg-cyan-500 bg-cyan-300 p-1.5 text-white border-b-[1px] border-b-cyan-400" href="http://www.twitter.com"><i class="fa-brands fa-twitter""></i></a>'
          : ""
      }
        <a class="hover:bg-cyan-500 bg-cyan-300 p-1.5 text-white border-b-[1px] border-b-cyan-400" href="http://www.instagram.com"><i class="fa-brands fa-instagram"></i></a>
        <a class="hover:bg-cyan-500 bg-cyan-300 p-1.5 text-white border-b-[1px] border-b-cyan-400" href="http://www.linkedin.com"><i class="fa-brands fa-linkedin"></i></a>
        <a class="hover:bg-cyan-500 bg-cyan-300 p-1.5 text-white border-b-[1px] border-b-cyan-400" href="http://www.github.com"><i class="fa-brands fa-github"></i></a>
      </div>
  </div>
  <div class="flex h-1/2 flex-col items-center justify-center">
    <div class="text-center text-3xl">${variables.name ||
      ""} ${variables.lastName || ""} </div>
    <div class="font-normal text-center text-2xl text-gray-400">Web Developer</div>
    <div class="text-center text-2xl text-gray-400">Miami, USA</div>
  </div>
    <div class="absolute left-0 right-0 top-[35%] flex flex-row justify-center">
      <img src="https://randomuser.me/api/portraits/men/42.jpg" class="h-32 w-32 rounded-full border-8 border-white" />
    </div>
  </div>
</div>

    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  document.querySelectorAll("input, select").forEach(elem => {
    elem.className = "border border-black p-2 rounded-md";
  });
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};

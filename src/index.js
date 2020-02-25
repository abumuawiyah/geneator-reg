import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  Open the console to see results :)
</div>
`;

const UserRegex = new RegExp(/@(\w+)/, "g");

function* getUsernames(string) {
  let match = null;

  do {
    match = UserRegex.exec(string);
    if (match) {
      yield match;
    }
  } while (match);
}

const string = "this is a test with @swizec and @kyleshevlin, maybe @lukeed05";

for (const username of getUsernames(string)) {
  console.log(username);
}

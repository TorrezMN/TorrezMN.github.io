# Effortlessly Create GitHub Gists from the Terminal with This Fish Shell Function
GitHub ,   DeveloperTools , Automation , Python 



## Problem

As developers, we often find ourselves needing a quick and easy way to save
code snippets or entire scripts for future reference. GitHub Gists provide a
convenient way to store and share these snippets. However, manually creating a
Gist through the GitHub interface can be time-consuming, especially when you
want to save snippets directly from your terminal.

## Idea

To streamline the process of saving code snippets as Gists, I wanted to create
a Fish shell function that could take a file, description, and visibility
setting as arguments, and automatically create a Gist. This way, I could
quickly push snippets to GitHub without leaving the terminal.

## Stack

To implement this solution, I used:

- **Fish Shell**: A smart and user-friendly command line shell.

- **cURL**: A command line tool for transferring data with URLs.

- **GitHub API**: The interface for creating Gists programmatically.

- **Python**: To handle JSON string processing.

## Solutions

### Proposed Solution
The solution involves creating a Fish shell function that:

1. Takes a filename, description, and visibility setting as inputs.

2. Reads the file content, processes it for safe JSON transfer, and constructs a JSON payload.

3. Sends the payload to GitHub's API to create a new Gist with the provided details.

### Token Creation

Before you can use this function, you'll need a GitHub token with `gists`
permissions. Here’s how to create it:

1. **Go to GitHub**: Log in to your GitHub account and navigate to
   [Settings](https://github.com/settings/profile).

2. **Generate Token**: Under "Developer settings," click on "Personal access
   tokens" and generate a new token.

3. **Set Permissions**: Ensure the token has the `gists` scope enabled. This
   allows the token to create and manage Gists.

4. **Store the Token**: Once generated, store the token securely in an
   environment variable, like `GITHUB_TOKEN`.

### Exporting the Token as an Environment Variable

To make sure your Fish shell function can access your GitHub token, you'll need
to export it as an environment variable. Here’s how you can do it:

1. Open your terminal.

2. Run the following command to export the token as an environment variable:

```fish set -Ux GITHUB_TOKEN your_token_here ```

Replace `your_token_here` with the actual token you generated from GitHub.

3. This command makes the `GITHUB_TOKEN` available globally in your Fish shell
sessions.

4. If you want this token to persist across sessions, add the command to your
`config.fish` file, usually located in `~/.config/fish/`.

## Fish Function

Here's the Fish function to create a Gist:

```fish
function new_gist
    # Check if the required arguments are provided
    if test (count $argv) -lt 3
        echo "Usage: new_gist <filename> <description> <visible>"
        return 1
    end

    set filename $argv[1]
    set description $argv[2]
    set visible $argv[3]

    # Convert the "visible" argument to a boolean value
    if test "$visible" = "True"
        set public true
    else if test "$visible" = "False"
        set public false
    else
        echo "The 'visible' argument must be either 'True' or 'False'."
        return 1
    end

    # Read the file content, escape necessary characters, and handle newlines
    set filecontent (cat $filename | python3 -c 'import json,sys; print(json.dumps(sys.stdin.read()))')

    # Construct the JSON payload using the output from Python
    set payload '{"description": "'$description'", "public": '$public', "files": {"'$filename'": {"content": '$filecontent'}}}'

    # Make the request to create the gist
    curl -L \
    -X POST \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer $GITHUB_TOKEN" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    https://api.github.com/gists \
    -d "$payload"
end
```

### Explanation

1. **Argument Handling**: The function expects three arguments: the file name,
   description, and visibility. If the visibility is not `True` or `False`, it
   will prompt the user to correct it.
  
2. **Visibility Handling**: The visibility argument controls whether the Gist
   will be public or private. It converts the string "True" or "False" into a
   boolean value that the GitHub API can process.
  
3. **File Content Processing**: Fish shell and JSON processing can be tricky
   due to special characters and newlines. This function uses Python to safely
   encode the file content into a JSON-compatible format.
  
4. **Payload Construction**: The JSON payload is built using the provided
   arguments and processed content, ensuring it is correctly formatted for the
   GitHub API.
  
5. **cURL Command**: The function uses cURL to send the request to GitHub,
   leveraging the personal access token for authentication.

---

### The `curl` Command

The `curl` command is used to send an HTTP request to the GitHub API to create
a new Gist. Below is a breakdown of each line and the flags used:

```fish
curl -L \
-X POST \
-H "Accept: application/vnd.github+json" \
-H "Authorization: Bearer $GITHUB_TOKEN" \
-H "X-GitHub-Api-Version: 2022-11-28" \
https://api.github.com/gists \
-d "$payload"
```

1. **`curl -L \`**:
    - **`curl`**: The command-line tool used to transfer data to or from a server.
    - **`-L`**: This flag tells `curl` to follow any redirects. This is useful if the URL provided might redirect to another URL (like from `http` to `https`), ensuring that the request reaches its destination.

2. **`-X POST \`**:
    - **`-X`**: Specifies the HTTP method to use. 
    - **`POST`**: This indicates that we're making a POST request, which is typically used to send data to the server, such as creating a new resource.

3. **`-H "Accept: application/vnd.github+json" \`**:
    - **`-H`**: Adds a header to the request.
    - **`"Accept: application/vnd.github+json"`**: This header tells the server that the client expects a response in JSON format specific to GitHub's API.

4. **`-H "Authorization: Bearer $GITHUB_TOKEN" \`**:
    - **`"Authorization: Bearer $GITHUB_TOKEN"`**: This header provides the authorization token required to authenticate the request. The `Bearer` keyword is followed by the token stored in the `GITHUB_TOKEN` environment variable.

5. **`-H "X-GitHub-Api-Version: 2022-11-28" \`**:
    - **`"X-GitHub-Api-Version: 2022-11-28"`**: This custom header specifies the version of the GitHub API to use. It ensures that the request is handled according to the API version specified, maintaining compatibility with any changes GitHub might make in future versions.

6. **`https://api.github.com/gists \`**:
    - This is the URL to which the request is sent. It points to the GitHub API endpoint for creating new Gists.

7. **`-d "$payload"`**:
    - **`-d`**: This flag indicates that the following string is the data to be sent in the request body.
    - **`"$payload"`**: This variable contains the JSON-formatted data that includes the Gist's description, visibility setting, and file content. This payload is sent as the body of the POST request.


---

### How to Use the Function

1. **Navigate to the directory** containing the file you want to save as a Gist.
2. **Run the command**: `new_gist <file.ext> <description> <visible>`.
   1. For example: `new_gist myscript.py "My Python Script" True`.
3. **Check GitHub**: Your new Gist should now be available in your GitHub account, either as a public or private Gist, depending on the visibility you set.

## Conclusions

This Fish shell function significantly simplifies the process of saving code
snippets to GitHub Gists, making it quick and convenient to store and share
code directly from the terminal. The flexibility to set the visibility of the
Gist ensures you can control who has access to your snippets, whether they are
public or private.

---








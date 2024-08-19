```markdown
# How to Create a GitHub Gist with Multiline File Content Using Fish Shell

Recently, I encountered a problem while trying to create a GitHub Gist using a Fish shell function. The goal was to automate the process of creating a private Gist by uploading a file's content directly to GitHub. However, I ran into some issues, especially when dealing with files that contained multiple lines.

### The Problem

Initially, my Fish function only pushed the first line of the file to the Gist, ignoring the rest. Additionally, I encountered errors related to JSON formatting when trying to include the entire file content in the payload.

### The Solution

To solve this, I needed a way to properly escape the file content, including handling newlines and special characters, so it could be safely included in the JSON payload required by GitHub's API. Here's the final Fish function that worked perfectly:

```fish
function new_gist
    # Check if the required arguments are provided
    if test (count $argv) -lt 2
        echo "Usage: new_gist <filename> <description>"
        return 1
    end

    set filename $argv[1]
    set description $argv[2]

    # Read the file content, escape necessary characters, and handle newlines
    set filecontent (cat $filename | python3 -c 'import json,sys; print(json.dumps(sys.stdin.read()))')

    # Construct the JSON payload using the output from Python
    set payload '{"description": "'$description'", "public": false, "files": {"'$filename'": {"content": '$filecontent'}}}'

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

### Why This Works

This solution works by leveraging Python's `json.dumps()` to properly escape the file content. Python's JSON module ensures that all necessary characters (like newlines, quotes, etc.) are correctly handled according to JSON specifications, making it a reliable way to construct the payload.

### Conclusion

This function now successfully uploads the entire content of a file to a GitHub Gist, even if the file contains multiple lines. It's a simple yet powerful example of how different tools can be combined in Fish shell to solve practical problems.

---

<!--
Hidden attribution: This blog post was created with the assistance of ChatGPT, a large language model trained by OpenAI. 
-->
```

Feel free to modify the content as needed. Thank you for the attribution—it's much appreciated!

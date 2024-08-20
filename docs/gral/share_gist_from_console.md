# Sharing Gists with Fish Shell and Python

## What You Will Learn Here

In this blog post, you'll learn how to automate the process of sharing GitHub
gists using a Fish shell function combined with a Python script. We'll cover:

- How to fetch and manage public gists from GitHub.
- How to integrate Python with shell scripting to create a user-friendly menu.
- How to handle user input and clipboard operations programmatically.

## Problem

Managing and sharing GitHub gists can be cumbersome if done manually. You often need to:

- Fetch a list of your gists.
- Identify the one you want to share.
- Copy its URL to your clipboard for sharing.

This process can be tedious, especially when dealing with a large number of
gists or when frequent sharing is required.

## Proposed Solution

We propose a solution that automates the process using a Fish shell function
and a Python script. The function will:

1. Fetch your public gists from GitHub using the GitHub API.
2. Use Python to present a menu of gists in a readable format.
3. Allow you to select a gist and copy its URL to the clipboard for easy sharing.

## Tools Needed

To implement this solution, you'll need the following tools:

- **Fish Shell:** For scripting and executing shell commands.
- **cURL:** For fetching data from the GitHub API.
- **Python 3:** For processing data and generating a user interface.
- **Python Libraries:** `pyfiglet` for ASCII art, `pyperclip` for clipboard operations.
- **GitHub API Token:** For authenticating requests to GitHub.

## The Function

Here's the Fish shell function used to share a gist, followed by a line-by-line explanation:

```fish
# Shares a gist.
function share_gist
    # Check if the GITHUB_TOKEN variable is set
    if test -z "$GITHUB_TOKEN"
        echo "Error: GITHUB_TOKEN is not set. Please set your GitHub token as an environment variable."
        return 1
    end

    # Fetch the user's public gists using GitHub API and token authentication
    set response (curl -s -H "Authorization: token $GITHUB_TOKEN" \
                        -H "Accept: application/vnd.github.v3+json" \
                        "https://api.github.com/gists")

    # Check if response is empty or contains an error
    if test -z "$response" -o "$response" = "* Not Found *"
        echo "Error: Failed to fetch gists or no gists found."
        return 1
    end

    # Use Python to create a menu of public gists
    python3 -c "
import json
import sys
import pyfiglet
import pyperclip

def print_ascii_title(title):
    ascii_art = pyfiglet.figlet_format(title, font='slant')  # You can choose different fonts
    print(ascii_art)

response = json.loads(sys.argv[1])

# Create a dictionary with description as key and html_url as value for public gists
gist_dict = {
    i.get('description', 'No Description'): i.get('html_url', 'No URL')
    for i in response
    if i.get('public', False)
}

# Print the ASCII title
print_ascii_title('* Select Gist *')

# Print a numbered menu
if not gist_dict:
    print('No public gists available.')
    sys.exit()

for idx, (description, url) in enumerate(gist_dict.items(), start=1):
    print(f'{idx}. {description}')

# Read user input
try:
    selected_index = int(input('Enter the number of the gist to copy the URL: '))
    if selected_index < 1 or selected_index > len(gist_dict):
        print('Error: Invalid selection.')
        sys.exit()
except ValueError:
    print('Error: Invalid input. Please enter a number.')
    sys.exit()

# Get the URL of the selected gist
selected_description = list(gist_dict.keys())[selected_index - 1]
selected_url = gist_dict[selected_description]

# Copy the URL to the clipboard
pyperclip.copy(selected_url)
print(f'Selected URL copied to clipboard: {selected_url}')
" "$response"
end
```

### Line-by-Line Explanation

1. **Function Definition:**
   ```fish
   function share_gist
   ```
   Defines a new Fish shell function named `share_gist`.

2. **Check for `GITHUB_TOKEN`:**
   ```fish
   if test -z "$GITHUB_TOKEN"
       echo "Error: GITHUB_TOKEN is not set. Please set your GitHub token as an environment variable."
       return 1
   end
   ```
   Checks if the `GITHUB_TOKEN` environment variable is set. If not, prints an error message and exits.

3. **Fetch Gists Using cURL:**
   ```fish
   set response (curl -s -H "Authorization: token $GITHUB_TOKEN" \
                       -H "Accept: application/vnd.github.v3+json" \
                       "https://api.github.com/gists")
   ```
   Uses `cURL` to fetch public gists from GitHub's API.

4. **Check for API Errors:**
   ```fish
   if test -z "$response" -o "$response" = "* Not Found *"
       echo "Error: Failed to fetch gists or no gists found."
       return 1
   end
   ```
   Checks if the response is empty or contains an error message.

5. **Python Script Execution:**
   ```fish
   python3 -c "
   import json
   import sys
   import pyfiglet
   import pyperclip
   ```
   Executes a Python script to process and display the gists. It uses
   `pyfiglet` to print an ASCII title and `pyperclip` to copy the selected URL
   to the clipboard.

6. **Generate ASCII Title:**
   ```python
   def print_ascii_title(title):
       ascii_art = pyfiglet.figlet_format(title, font='slant')  # You can choose different fonts
       print(ascii_art)
   ```
   Defines a function to generate and print ASCII art for the title.

7. **Process Gist Data:**
   ```python
   gist_dict = {
       i.get('description', 'No Description'): i.get('html_url', 'No URL')
       for i in response
       if i.get('public', False)
   }
   ```
   Creates a dictionary of public gists with descriptions and URLs.

8. **Display Gist Menu:**
   ```python
   for idx, (description, url) in enumerate(gist_dict.items(), start=1):
       print(f'{idx}. {description}')
   ```
   Prints a numbered list of gists.

9. **Handle User Input:**
   ```python
   selected_index = int(input('Enter the number of the gist to copy the URL: '))
   ```
   Reads and validates user input for selecting a gist.

10. **Copy URL to Clipboard:**
    ```python
    pyperclip.copy(selected_url)
    print(f'Selected URL copied to clipboard: {selected_url}')
    ```
    Copies the selected gist URL to the clipboard and prints a confirmation message.

## Conclusion

By combining Fish shell scripting with Python, you can efficiently manage and
share your GitHub gists. This approach simplifies the process of interacting
with the GitHub API, provides a user-friendly interface for selecting and
copying gists, and integrates various tools to enhance your workflow.
Automating repetitive tasks like these can save time and improve productivity,
making it easier to focus on your code rather than on administrative tasks.


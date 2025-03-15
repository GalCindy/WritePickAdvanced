# Writing Prompt Generator

This is a simple Python script that generates random writing prompts across multiple categories. Users can select from the following options:

1. **Single Word** - Generates a single random word to inspire writing.
2. **Dear Abby** - Provides an advice-column-style writing prompt.
3. **First Line** - Offers a compelling opening sentence for a story.
4. **Memoir** - Encourages personal reflection and storytelling.
5. **Genre** - Suggests a writing prompt based on a specific genre.
6. **Mixed Mode** - Randomly selects from all available categories.

## How to Use

1. Clone or download this repository.
2. Run the script using Python:
   ```sh
   python prompt_generator.py
   ```
3. Select a category by entering a number (1-6).
4. Receive your randomly generated prompt!

## Code

```python
import random

def single_word_prompt():
    words = ["Hope", "Journey", "Shadow", "Echo", "Whisper", "Storm"]
    return random.choice(words)

def dear_abby_prompt():
    prompts = [
        "Dear Abby, my neighbor keeps borrowing my lawnmower and never returns it. What should I do?",
        "Dear Abby, I found a mysterious note in an old book. Should I track down its author?",
        "Dear Abby, my dog barks at ghosts. Should I be concerned?"
    ]
    return random.choice(prompts)

def first_line_prompt():
    prompts = [
        "The storm rolled in just as she opened the letter.",
        "I never meant to become a time traveler, but here we are.",
        "'You have to see this,' he whispered, pointing at the sky."
    ]
    return random.choice(prompts)

def memoir_prompt():
    prompts = [
        "Write about the first time you felt truly independent.",
        "Describe a moment when you made an important decision that changed your life.",
        "Recall a childhood memory that still makes you smile."
    ]
    return random.choice(prompts)

def genre_prompt():
    genres = {
        "Mystery": "A detective receives a clue that leads to an unexpected suspect.",
        "Sci-Fi": "Humanity's first contact with aliens doesn't go as planned.",
        "Fantasy": "A hidden door in the library leads to another realm.",
        "Horror": "A child starts speaking a language they were never taught."
    }
    genre = random.choice(list(genres.keys()))
    return f"{genre}: {genres[genre]}"

def mixed_prompt():
    all_prompts = [single_word_prompt, dear_abby_prompt, first_line_prompt, memoir_prompt, genre_prompt]
    return random.choice(all_prompts)()

def main():
    print("Choose a prompt type:")
    print("1. Single Word")
    print("2. Dear Abby")
    print("3. First Line")
    print("4. Memoir")
    print("5. Genre")
    print("6. Mixed Mode")
    
    choice = input("Enter your choice (1-6): ")
    options = {
        "1": single_word_prompt,
        "2": dear_abby_prompt,
        "3": first_line_prompt,
        "4": memoir_prompt,
        "5": genre_prompt,
        "6": mixed_prompt
    }
    
    if choice in options:
        print("
Your prompt:")
        print(options[choice]())
    else:
        print("Invalid choice. Please select a number between 1 and 6.")

if __name__ == "__main__":
    main()
```

## Contributing
Feel free to submit pull requests with additional prompts or features!

## License
This project is open-source and available under the MIT License.

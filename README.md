# Netflix-Show-Tracker

This is a show tracking app that helps users track the movies or series they have watched. The current features include a display of the week's latest shows and their synopses on the Home page and a search bar to search for shows on the My Shows page. Users can add and remove shows from the watch history list.

## Technologies Used

1. React framwork

   - 5 components
   - 7 props
   - 1 lifting state
   - 2 routes
   - 1 custom useFetch hook
   - 8 useState hooks
   - 5 useEffect hooks

2. 3rd Party API (Unofficial Netflix API)
3. Bootstrap for styling
4. Node Package Manager

## Approach

**Reusable Components and React Hooks**

- Create resusable components that can customised through its props.
- Create hooks to extract stateful logic from components so that they can be reused.

## Challenges

- States returning null or undefined when set with data fecthed from API
- Controlling when the components should or should not rerender
- Making local storage persist on component reload

## Unsolved Problems & Further Work

1. Image loading is laggy on homepage
2. Local storage of search history
3. To organise user's watched history into series so that users can check their progress on each series

## References

- [TV Favicon](https://icon-icons.com/icon/TV/3527)
- [Unofficial Netflix API](https://rapidapi.com/unogs/api/unogsng)

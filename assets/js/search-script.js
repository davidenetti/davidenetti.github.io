/**
 * Wait for the DOM to be fully loaded before initializing search.
 * This ensures all HTML elements are accessible by the script.
 */
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results-container');

    // Proceed only if search elements exist on the current page
    if (searchInput && resultsContainer) {
        
        /**
         * The 'json' path is retrieved from a data-attribute set in default.html.
         * This avoids hardcoding paths inside the external JS file.
         */
        const jsonPath = searchInput.getAttribute('data-search-path');

        SimpleJekyllSearch({
            searchInput: searchInput,
            resultsContainer: resultsContainer,
            json: jsonPath,
            // Search result template with dynamic variables
            searchResultTemplate: '<li><a href="{url}">{title}</a> <span class="post-date">({date})</span></li>',
            // Displayed when no matches are found
            noResultsText: '<li>No results found.</li>',
            // Limit results to keep the UI clean
            limit: 10,
            // Set to true if you want to allow partial/typo matches
            fuzzy: false 
        });
        
        console.log("SimpleJekyllSearch initialized successfully.");
    }
});

# Portfolio Website

A modern, responsive portfolio website built with plain HTML, CSS, and JavaScript. Perfect for showcasing your projects, embedding media, and hosting on GitHub Pages for free.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🖼️ Support for images, videos, and audio
- 🔗 Easy to add project pages
- 🚀 Ready for GitHub Pages deployment
- ⚡ Fast loading with no dependencies
- 🎯 SEO-friendly structure

## Project Structure

```
.
├── index.html          # Main homepage
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── projects/           # Individual project pages
│   ├── project-1.html
│   ├── project-2.html
│   └── project-3.html
└── README.md          # This file
```

## Customization

### Adding a New Project

1. **Create a new HTML file** in the `projects/` folder (e.g., `projects/my-project.html`)
2. **Copy the structure** from an existing project page
3. **Update the content** with your project details
4. **Add the project** to the `projects` array in `script.js`:

```javascript
{
    id: 'my-project',
    title: 'My Project',
    description: 'Description of my project',
    image: 'path/to/image.jpg',
    tags: ['Tag1', 'Tag2'],
    link: 'projects/my-project.html'
}
```

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;    /* Main brand color */
    --secondary-color: #8b5cf6;  /* Secondary color */
    --text-color: #1f2937;       /* Main text color */
    /* ... more variables */
}
```

### Embedding Media

#### Images
```html
<img src="path/to/image.jpg" alt="Description">
```

#### YouTube Videos
```html
<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/VIDEO_ID"></iframe>
</div>
```

#### Video Files
```html
<video controls>
    <source src="video.mp4" type="video/mp4">
</video>
```

#### Audio Files
```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
</audio>
```

## Deployment to GitHub Pages

### Method 1: Using GitHub Repository Settings (Recommended)

1. **Create a GitHub repository** (or use an existing one)
2. **Push your code** to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main branch** (or **master** if that's your default)
   - Click **Save**
   - Your site will be available at `https://yourusername.github.io/your-repo-name/`

### Method 2: Using a Custom Domain

1. Follow steps 1-3 above
2. In the GitHub Pages settings, enter your custom domain
3. Add a `CNAME` file to your repository root with your domain name
4. Configure DNS records with your domain provider

## Local Development

Simply open `index.html` in your web browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tips

- **Optimize images**: Use tools like [TinyPNG](https://tinypng.com/) to compress images before uploading
- **Use relative paths**: All links should be relative (e.g., `../styles.css`) for GitHub Pages
- **Test locally**: Always test your site locally before pushing to GitHub
- **Mobile first**: The design is mobile-responsive, but test on actual devices when possible

## License

Feel free to use this template for your own portfolio. Customize it to your heart's content!

## Support

If you encounter any issues or have questions, feel free to open an issue on GitHub or modify the code to fit your needs.

---

**Happy coding! 🚀**


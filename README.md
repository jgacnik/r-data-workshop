# Data Analysis in R

This repository holds the website and materials for an introductory **Data Analysis in R** workshop. The website has setup instructions, Quarto Reveal.js slides with R code students can run in the browser (webR), printable PDFs, and a starter project to download.

## Student website

The course website is at https://jgacnik.github.io/r-data-workshop/.

Students should begin with the website's **Setup** page, then use **Materials** to open the presentations and download the starter project.

## Presentations

| Part | Topic | Source | Live slides |
| --- | --- | --- | --- |
| 1 | Introduction to R | [`R_part1.qmd`](R_part1.qmd) | [Slides](https://jgacnik.github.io/r-data-workshop/R_part1.html) |
| 2 | Data visualization | [`R_part2.qmd`](R_part2.qmd) | [Slides](https://jgacnik.github.io/r-data-workshop/R_part2.html) |
| 3 | Data transformation | [`R_part3.qmd`](R_part3.qmd) | [Slides](https://jgacnik.github.io/r-data-workshop/R_part3.html) |
| 4 | Data tidying | [`R_part4.qmd`](R_part4.qmd) | [Slides](https://jgacnik.github.io/r-data-workshop/R_part4.html) |
| 5 | Projects and data import | [`R_part5.qmd`](R_part5.qmd) | [Slides](https://jgacnik.github.io/r-data-workshop/R_part5.html) |
| 6 | Complete project demonstration | [`R_part6.qmd`](R_part6.qmd) | [Slides](https://jgacnik.github.io/r-data-workshop/R_part6.html) |

GitHub Actions renders the slides and publishes them on the website, so the rendered HTML is not in the repository. Edit the `.qmd` sources to change a presentation. The PDFs in `downloads/slides/` are exported by hand, so re-export them after editing a part.

## Website structure

- `index.qmd` is the student homepage.
- `setup.qmd` contains R, RStudio, package, and starter-project instructions.
- `materials.qmd` links all interactive presentations, PDFs, data, and downloads.
- `_quarto.yml` contains the shared website navigation and publishing configuration.
- `site.css` styles the website.

## Rendering

Install [R 4.6.0 or later](https://cran.r-project.org/) (the slides use the base-R `penguins` dataset), [Quarto](https://quarto.org/), and the R packages `tidyverse`, `knitr`, and `janitor`. Render the complete website from the repository root with:

```sh
quarto render
```

The finished site is written to `_site/`. To render only one presentation:

```sh
quarto render R_part4.qmd
```

Replace `R_part4.qmd` with the presentation you want to render.

## Supporting files

- `styles.css` contains the shared presentation styling.
- `figures/` contains images and graphics used by the slides.
- `_extensions/` contains the Quarto extensions used by the presentations.

### Automated starter-project ZIP

- `workshop/example_project/` is the only place to edit the student starter project.
- `downloads/example_project.zip` is built from that folder and ignored by git, so don't edit or commit it.

To rebuild the student ZIP locally, run:

```powershell
.\scripts\build-student-project.ps1
```

After changes are pushed to `main`, GitHub Actions:

1. checks out the editable project source;
2. runs the ZIP-building script;
3. renders the Quarto website, which copies the new ZIP into `_site/downloads/`;
4. publishes the website and its updated student download together.

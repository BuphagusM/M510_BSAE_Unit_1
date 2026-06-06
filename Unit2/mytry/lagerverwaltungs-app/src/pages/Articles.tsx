import React, {useState, useMemo} from 'react'
import {articles} from '../data/mockData'
import {
    Stack,
    Typography,
    TextField,
    Tooltip,
    Select,
    MenuItem,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    colors,
    SelectChangeEvent
} from "@mui/material";

// Artikelseite - zeigt alle Artikel in einer Tabelle an
function Articles(): React.ReactElement {
    // TODO: Tabelle mit allen Artikeln ausgeben
    const articleList = articles

    const [filterValues, setFilterValues] = useState({
        category: '',
        status: '',
        location: '',
        search: '',
    })

    const filteredArticles = useMemo(
        () =>
            articleList.filter((article) => {
                const matchesCategory =
                    !filterValues.category || article.category === filterValues.category
                const matchesStatus =
                    !filterValues.status || article.status === filterValues.status
                const matchesLocation =
                    !filterValues.location || article.location === filterValues.location
                const searchText = filterValues.search.trim().toLowerCase()
                const matchesSearch =
                    !searchText ||
                    article.name.toLowerCase().includes(searchText) ||
                    article.articleNumber.toString().includes(searchText) ||
                    article.category.toLowerCase().includes(searchText) ||
                    article.location.toLowerCase().includes(searchText) ||
                    article.status.toLowerCase().includes(searchText)

                return matchesCategory && matchesStatus && matchesLocation && matchesSearch
            }),
        [articleList, filterValues]
    )

    const categories = Array.from(new Set(filteredArticles.map((article) => article.category)))
    const statuses = Array.from(new Set(filteredArticles.map((article) => article.status)))
    const locations = Array.from(new Set(filteredArticles.map((article) => article.location)))

    const filters = [
        {id: 'category', label: 'Kategorie', values: categories, allLabel: 'Alle Kategorien'},
        {id: 'status', label: 'Status', values: statuses, allLabel: 'Alle Status'},
        {id: 'location', label: 'Standort', values: locations, allLabel: 'Alle Standorte'},
    ]

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
        const {name, value} = event.target as HTMLInputElement
        setFilterValues((prev) => ({...prev, [name]: value}))
    }

    const getRowSx = (article: typeof articleList[number]) => {
        const diff = article.stock - article.minStock
        if (diff <= 0) {
            return {backgroundColor: colors.red[100]}
        }
        return {}
    }

    return (
        <Stack className="page-container" spacing={2}>
            <Typography className="page-title" variant="h3">
                Artikel
            </Typography>
            {articleList.length > 0 ? (
                <>
                    <Typography className="page-subtitle">
                        Alle Lagerartikel im Ueberblick
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                        <Tooltip title="Suche">
                            <TextField
                                label="Suche"
                                id="search-input"
                                name="search"
                                type="search"
                                value={filterValues.search}
                                onChange={handleFilterChange}
                            />
                        </Tooltip>
                        {filters.map((filter) => (
                                // Fragment nötig: map() erlaubt nur 1 Root-Element,
                                // aber wir rendern Typography + Select nebeneinander.
                                // Kurzform <>...</> nicht möglich, da wir hier key benötigen.
                                // Langform <React.Fragment key={...}> nötig wenn key benötigt wird.
                            <React.Fragment key={filter.id}>
                                <Typography variant="subtitle1">{filter.label}</Typography>
                                <Select
                                    label={filter.label}
                                    id={`${filter.id}-select`}
                                    name={filter.id}
                                    value={filterValues[filter.id as keyof typeof filterValues]}
                                    onChange={handleFilterChange}
                                    sx={{minWidth: 200}}
                                >
                                    <MenuItem value="">{filter.allLabel}</MenuItem>
                                    {filter.values.map((value) => (
                                        <MenuItem key={value} value={value}>
                                            {value}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </React.Fragment>
                        ))}
                        <Button variant="contained" color="primary"
                                onClick={() => setFilterValues({category: '', status: '', location: '', search: ''})}
                                sx={{height: 40}}>
                            Filter zurücksetzen
                        </Button>
                    </Stack>
                    {/*Felder: name, articleNumber, category, location, stock, minStock, status */}
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Artikelnummer</TableCell>
                                <TableCell>Kategorie</TableCell>
                                <TableCell>Standort</TableCell>
                                <TableCell>Bestand</TableCell>
                                <TableCell>Mindestbestand</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredArticles.map((article) => (
                                <TableRow key={article.articleNumber} sx={getRowSx(article)}>
                                    <TableCell>{article.name}</TableCell>
                                    <TableCell>{article.articleNumber}</TableCell>
                                    <TableCell>{article.category}</TableCell>
                                    <TableCell>{article.location}</TableCell>
                                    <TableCell>{article.stock}</TableCell>
                                    <TableCell>{article.minStock}</TableCell>
                                    <TableCell>{article.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </>
            ) : (
                <Typography style={{color: '#94a3b8'}}>Artikelliste noch nicht implementiert.</Typography>
            )}
        </Stack>
    )
}

export default Articles

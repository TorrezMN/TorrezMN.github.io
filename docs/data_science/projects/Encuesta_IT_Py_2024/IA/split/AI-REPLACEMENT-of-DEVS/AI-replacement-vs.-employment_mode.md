## AI replacement vs. employment_mode

```python
# Mostrar valores unicos en columna 'employment mode'.
get_column_uniques(df, "employment_mode")
```

```
['Empleador local (Paraguay)',
 'foreign_employer',
 'freelance',
 'local_with_foreign_clients']
```

```python
grouped_grid_barh_chart(
    df.groupby("employment_mode"),
    "AI_replace_dev",
    "AI replacement by 'employment mode'.",
    4,
    1,
    "black",
    8.5,
)
```

![png](output_54_0.png)

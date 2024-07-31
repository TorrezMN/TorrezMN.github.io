## AI replacement by gender.

```python
gender_gorups = df.groupby("gender")
```

```python
grouped_grid_barh_chart(
    gender_gorups, "AI_replace_dev", "AI replacement by gender.", 3, 1, "black", 8.5
)
```

![png](output_49_0.png)

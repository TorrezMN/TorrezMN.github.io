# AI Tools usage

```python
# print uniques in column.
ai_usage_uniques_df = uniques_count_to_dataframe(
    get_column_uniques_count(df, "use_AI_tools")
)
```

```python
plot_uniques_count(ai_usage_uniques_df, "AI usage counts.", "Count.", "AI")
```

![png](output_15_0.png)

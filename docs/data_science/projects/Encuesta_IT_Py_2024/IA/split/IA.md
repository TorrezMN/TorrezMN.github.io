### 5. **Artificial Intelligence**

- ¿Usás regularmente\* alguna de estas herramientas de I.A. para ayudarte en tu proceso de desarrollo?

- ¿Creés que la inteligencia artificial reemplazará al desarrollador?

- ¿Usás regularmente\* alguna de estas herramientas de I.A. para ayudarte en tu proceso de desarrollo?

```python
ia_use_df = uniques_count_to_dataframe(get_column_uniques_count(df, "use_AI_tools"))
```

```python
ia_use_df
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

```
.dataframe tbody tr th {
    vertical-align: top;
}

.dataframe thead th {
    text-align: right;
}
```

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>category</th>
      <th>count</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>ChatGPT</td>
      <td>300</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Github Copilot</td>
      <td>100</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Google Bard</td>
      <td>49</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Bing AI</td>
      <td>45</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Notion AI</td>
      <td>17</td>
    </tr>
    <tr>
      <th>5</th>
      <td>WolframAlpha</td>
      <td>5</td>
    </tr>
    <tr>
      <th>6</th>
      <td>AWS CodeWhisperer</td>
      <td>5</td>
    </tr>
    <tr>
      <th>7</th>
      <td>Codeium</td>
      <td>4</td>
    </tr>
    <tr>
      <th>8</th>
      <td>Claude.ai</td>
      <td>2</td>
    </tr>
    <tr>
      <th>9</th>
      <td>Copilot</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
</div>

```python
md_table("ia_use_total_count_table", ia_use_df, "Use of IA total count.")
```

```
        <center>
        <a id="ia_use_total_count_table_o5nCT"></a>
        
        | category          |   count |
|:------------------|--------:|
| ChatGPT           |     300 |
| Github Copilot    |     100 |
| Google Bard       |      49 |
| Bing AI           |      45 |
| Notion AI         |      17 |
| WolframAlpha      |       5 |
| AWS CodeWhisperer |       5 |
| Codeium           |       4 |
| Claude.ai         |       2 |
| Copilot           |       1 |
        
        <p style="text-align: center;"><em>Use of IA total count.</em></p>
        </center>
        <br/>
        <br/>
```

```python

```

```python
plot_uniques_count(ia_use_df, "Use IA tools regularly.", "Count", "Tool")
```

![png](output_8_0.png)

```python

```

- ¿Creés que la inteligencia artificial reemplazará al desarrollador?

```python
ai_replacement_df = uniques_count_to_dataframe(
    get_column_uniques_count(df, "AI_replace_dev")
)
```

```python
plot_uniques_count(ai_replacement_df, "Will AI replace dev's?\n", "count", "resp.")
```

![png](output_12_0.png)

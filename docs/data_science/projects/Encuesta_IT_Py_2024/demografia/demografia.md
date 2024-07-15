```python
#######################
# CONFIG ZONE
#######################

# Importing Libs
import pandas as pd
import seaborn as sns

import matplotlib.pyplot as plt

from collections import Counter
import numpy as np

# My Tools
import milanesas.eda_helper as eh
from tools.helpers import (
    get_column_uniques,
    get_column_uniques_count,
    plot_grouped_by_category_barh_charts,
    barh_chart_unique_values,
    print_unique_normalized_values_by_group,
    make_vertical_grouped_chart,
    make_horizontal_grouped_chart,
    barh_chart_count,
)


%matplotlib inline

# Reseting figure size params.
plt.rcParams["figure.figsize"] = [12, 7]
# Setting seaborn as default plotting lib.
sns.set()
sns.set_palette("pastel")
```


```python

```


```python

```


```python
df = pd.read_csv("../data/data_fixed.csv")
```


```python
df = df.drop("Unnamed: 0", axis=1)
df.columns
```




    Index(['work_mode', 'employment_mode', 'role', 'prog_skills_in_role',
           'code_for_job', 'IT_exp', 'prof_prog_exp', 'first_code',
           'assigned_seniority', 'self_assessed_seniority', 'formal_edu', 'majors',
           'formal_edu_importance', 'gender', 'age', 'monthly_salary',
           'pro_languages', 'web_frameworks', 'other_tools', 'databases',
           'platforms', 'fav_language', 'least_fav_language', 'fav_framework',
           'least_fav_framework', 'tools', 'use_AI_tools', 'AI_replace_dev',
           'layoffs_23_24', 'working_now', 'unemployed_duration', 'same_role',
           'current_vs_prev_salary'],
          dtype='object')



# **Demographics**
   - Género
   - Edad actual


### Gender


```python
barh_chart_count(df, "gender", "Gender count by category.", "Count")
```


    
![png](output_7_0.png)
    


[op] en materia de genro se encontraron 3 categorias:

+ *male* 

+ *female*

+ *prefer not to say*

Menos de 50% de los encuestados no pertenece al 'sexo masculino'. Las 2 minorias existentes no logran sumar el 25% de las repuestas totales.

### Current age.


```python
df.columns
```




    Index(['work_mode', 'employment_mode', 'role', 'prog_skills_in_role',
           'code_for_job', 'IT_exp', 'prof_prog_exp', 'first_code',
           'assigned_seniority', 'self_assessed_seniority', 'formal_edu', 'majors',
           'formal_edu_importance', 'gender', 'age', 'monthly_salary',
           'pro_languages', 'web_frameworks', 'other_tools', 'databases',
           'platforms', 'fav_language', 'least_fav_language', 'fav_framework',
           'least_fav_framework', 'tools', 'use_AI_tools', 'AI_replace_dev',
           'layoffs_23_24', 'working_now', 'unemployed_duration', 'same_role',
           'current_vs_prev_salary'],
          dtype='object')




```python
barh_chart_count(df, "age", "Current age.\n (At the time of the survey.)", "age")
```


    
![png](output_11_0.png)
    


[op] Los grupos mas concentrados de encuestados tienen mas de **35 años** mientras que la los grupos de menor edad, en todas las categorias, no alcanzan a sobrepasar el 50%. 
La mayor concentracion de encuestados esta en el grupo etario de **30-34** años. El grupo etarios de encuestados que concentra la mayor cantidad de encuestados comienza en los 30 años y termina el los 39 años.

# Ages by gender.


```python
gender_groups = df.groupby("gender")
print(gender_groups.groups.keys())
```

    dict_keys(['female', 'male', 'prefer_not_to_say'])



```python
group_config = {
    "title": "Current age by Gender",
    "c1_label": "Male",
    "c2_label": "Female",
    "xlabel": "Count",
    "ylabel": "Current Age",
}
```


```python
make_horizontal_grouped_chart(
    df,
    gender_groups.get_group("male"),
    gender_groups.get_group("female"),
    "age",
    get_column_uniques(df, "age"),
    group_config,
)
```


    
![png](output_16_0.png)
    


[op] En el caso de la comparacion de distribuciones etarias por genero. Cuando se comparan genero masculino y femenino. Se observan que en la mayoria de las categorias etarias, en ningun caso, existe una distribucion "igualitaria" de representacion de generos. En todos los casos la representacion "masculina" supera amplamente a la femenina. (No se tomo en consideracion la categoria "prefiero no contestar debido que no es una categoria representativa.)

Las 4 categorias con mayor reprecentacion som:

* 20-24
* 25-29
* 30-34
* 35-39

En ninguno de los casos anteriores el % de mujeres supera el 50% del total de la categoria.


```python
for i in gender_groups.groups.keys():
    print("Grupo -> ", i)
    print(gender_groups.get_group(i)["age"].value_counts())
    print("\n" * 5)
```

    Grupo ->  female
    age
    25_29 years    19
    35_39 years     8
    30_34 years     8
    20_24 years     8
    40_44 years     3
    50_54 years     1
    Name: count, dtype: int64
    
    
    
    
    
    
    Grupo ->  male
    age
    30_34 years    103
    25_29 years     78
    35_39 years     58
    40_44 years     43
    20_24 years     40
    45_49 years     10
    15_19 years      5
    50_54 years      4
    60+ years        3
    55_59 years      1
    Name: count, dtype: int64
    
    
    
    
    
    
    Grupo ->  prefer_not_to_say
    age
    25_29 years    1
    45_49 years    1
    Name: count, dtype: int64
    
    
    
    
    
    



```python

```


```python

```


```python

```


```python

```


echo "=================================="
echo "CHECK MD files format."
echo "=================================="

for i in $(find -name '*.md');
    do 
        mdformat --check $i 
    done


echo "=================================="
echo "Formating MD files."
echo "=================================="

for i in $(find -name '*.md');
    do 
        mdformat $i 
    done


mkdocs build --clean

#!/bin/bash

# Lista de variáveis no formato NOME=VALOR
VARIABLES=(
  "HOST_11=21.234.567.89"
  "HOST_12=32.345.678.90"
  "HOST_13=43.456.789.01"
  "HOST_14=54.567.890.12"
  "HOST_15=65.678.901.23"
)

# Adicionar cada variável ao repositório
for VARIABLE in "${VARIABLES[@]}"; do
  VAR_NAME=$(echo "$VARIABLE" | cut -d'=' -f1)
  VAR_VALUE=$(echo "$VARIABLE" | cut -d'=' -f2)
  echo "Adicionando variável: $VAR_NAME com valor $VAR_VALUE"
  gh variable set "$VAR_NAME" --body "$VAR_VALUE"
done

echo "Todas as variáveis foram adicionadas com sucesso!"

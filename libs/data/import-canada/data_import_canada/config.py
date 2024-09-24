from pydantic import BaseModel, Field
from typing import List

class TableConfig(BaseModel):
    name: str

class DataSourceConfig(BaseModel):
    source_version: str
    schema_name: str
    tables: List[TableConfig]

class Config(BaseModel):
    data_source: DataSourceConfig = Field(..., alias="data_source")
    database_url: str

def load_config(path: str) -> Config:
    import yaml
    with open(path, 'r') as file:
        config_dict = yaml.safe_load(file)
    return Config(**config_dict)

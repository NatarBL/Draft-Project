import pandas as pd
import json

df = pd.read_excel(r".\Data\Data_Book.xlsx")

s_array = df[["week1","week2","week3","week4","week5","week6","week7","week8","week9","week10","week11","week12","week13","week14","week15","week16","week17"]].to_numpy()

df = pd.read_excel(r".\Data\Data_Book.xlsx", usecols="A:L") # reads values from columns A-L

df['ppr_by_week'] = [s_array[0],s_array[1],s_array[2],s_array[3],s_array[4]]

df.to_json('player_data.json', orient='records') # dataframe to json

# read json and then append details to it
with open('./player_data.json', 'r') as json_file: 
    a = {}
    data = json.load(json_file)
    a['Players'] = data
# write new json with details in it
with open("./player_data.json", "w") as jsonFile:
    json.dump(a, jsonFile)

def read_excel_file():

    print("Activated")
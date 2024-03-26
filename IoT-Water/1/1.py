'''
Author: LoveKamila 120189976+LoveKamila@users.noreply.github.com
Date: 2024-03-17 17:19:11
LastEditors: LoveKamila 120189976+LoveKamila@users.noreply.github.com
LastEditTime: 2024-03-17 17:24:13
FilePath: \IoT-frontend\IoT-Water\1\1.py
Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
'''
import pandas as pd

import os
print(os.getcwd())  # 这样就能看到目前Python搜索路径在哪里，如果报错找不到，多半是你这个路径下没有文件


pd.read_csv('IoT-Water/1/COD_valid.csv', index_col=False)
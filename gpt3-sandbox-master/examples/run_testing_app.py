import os
import sys
sys.path.append(os.path.dirname(os.path.dirname(os.path.realpath(__file__))))

from api import GPT, Example, UIConfig
from api import demo_web_app


# Construct GPT object and show some examples
gpt = GPT(engine="davinci",
          temperature=0.9,
          max_tokens=150)

gpt.add_example(Example('What is Pricing?', """Pricing is the process whereby a business sets the price at which it will sell its products and services, and may be part of the business's marketing plan. In setting prices, the business will take into account the price at which it could acquire the goods, the manufacturing cost, the marketplace, competition, market condition, brand, and quality of product."""))
gpt.add_example(
    Example('What is Procurement?', """Procurement is the process of finding and agreeing to terms, and acquiring goods, services, or works from an external source, often via a tendering or competitive bidding process""" ))
gpt.add_example(Example(
    'What is Flexport?', """Flexport delivers deep visibility and control, low and predictable supply chain costs, with faster and more reliable transit times. All from a powerful technology platform."""))
# gpt.add_example(Example('The log of two times x', '\\log{2x}'))
# gpt.add_example(
#     Example('x squared plus y squared plus equals z squared', 'x^2 + y^2 = z^2'))
# gpt.add_example(
#     Example('The sum from zero to twelve of i squared', '\\sum_{i=0}^{12} i^2'))
# gpt.add_example(Example('E equals m times c squared', 'E = mc^2'))
# gpt.add_example(Example('H naught of t', 'H_0(t)'))
# gpt.add_example(Example('f of n equals 1 over (b-a) if n is 0 otherwise 5',
#                         'f(n) = \\begin{cases} 1/(b-a) &\\mbox{if } n \\equiv 0 \\\ # 5 \\end{cases}'))

# Define UI configuration
config = UIConfig(description="Hello Flexport Team, my name is GPT-3",
                  button_text="Run this awesome AI!",
                  placeholder="codebase")

demo_web_app(gpt, config)

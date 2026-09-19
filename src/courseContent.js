export const courseLessons = [
  {
    slug: 'demat', category: 'Investing', minutes: 10, title: 'What a demat account is for',
    standfirst: 'A demat account is the digital place where many of the investments you own are recorded and held. It is important infrastructure, but it is not an investment by itself.',
    sections: [
      { heading: 'Start with the job it does', paragraphs: [
        '“Demat” is short for dematerialised. Years ago, shares could exist as paper certificates. A demat account replaces those certificates with an electronic record. If you buy shares in a listed company, the account is where those shares are held in your name electronically. Think of it as a digital locker with a very specific job: it keeps a record of securities you own.',
        'Securities is a broad word for investments such as shares, bonds, exchange-traded funds (ETFs), government securities and, in some cases, mutual fund units. A demat account is not your bank account. It does not normally hold the cash you use to buy something, and it does not magically make an investment safe or profitable. It simply holds the investment after you own it.'
      ], terms: [['Security', 'An investment that can be bought, sold or held, such as a share or bond.'], ['Dematerialised', 'Changed from a paper certificate into an electronic record.']] },
      { heading: 'Three accounts, three different jobs', paragraphs: [
        'A first-time investor often hears “open a demat account” and assumes it does everything. In a typical listed-share purchase, three linked pieces do different jobs. Your bank account supplies or receives money. A trading account places the buy or sell order through a broker. The demat account receives the shares after the trade is settled. The same provider may offer all three, which makes the boundary easy to miss.',
        'Suppose Riya has ₹5,000 in her bank account and decides to buy one listed share for ₹1,000. She places the order in her broker’s app through the trading account. Once the trade is completed and settled, the share appears in her demat account. The ₹1,000 and applicable charges leave through the payment and trading process; the share does not sit in her bank account. When she later sells it, the process runs in reverse: the holding leaves her demat account and sale proceeds eventually reach her bank account.'
      ], example: 'A useful mental picture: bank account = money wallet; trading account = the counter where you place an order; demat account = the locker holding what you bought.' },
      { heading: 'Who runs the plumbing?', paragraphs: [
        'In India, the central depositories that maintain electronic records are NSDL and CDSL. You usually do not open an account directly with either one. Instead, you open it with a depository participant, often called a DP. A broker or bank can act as a DP. The app you use may feel like the whole system, but it is a front door into a larger setup involving the broker, exchange, clearing system, depository and your linked accounts.',
        'That is also why a share does not always appear in the very second you press Buy. An order may be matched quickly, yet the formal transfer and settlement process happens through market infrastructure. Your broker’s app will usually show an executed order, a pending settlement status and then the holding. The exact timelines and processes can change, so treat the app’s current information and official notices as the source for a particular trade.'
      ] },
      { heading: 'What changes after you own a share', paragraphs: [
        'A demat account can make ownership quieter than people expect. You will not receive a paper share certificate every month. Instead, your holdings and transaction statements provide the record. If a company pays a dividend, eligible shareholders generally receive cash in the linked bank account. If it announces a bonus issue or a stock split, the number of shares and their per-share price may change in the demat record. The value of the business has not automatically doubled just because the number displayed doubled.',
        'Corporate actions are events initiated by a company that affect shareholders. A bonus issue gives existing shareholders additional shares under stated terms. A split changes one share into multiple shares with a proportionately lower face value or price. A rights issue gives eligible shareholders an opportunity to buy additional shares. These words matter because the screen can look different afterward, even when the economic story is not as dramatic as the new number suggests.'
      ], misconception: '“A bonus share is free profit.” Not necessarily. The market price usually adjusts to reflect the changed number of shares. Read the terms and consider the company, rather than judging an event by the word bonus.' },
      { heading: 'Costs and calm habits', paragraphs: [
        'Opening and maintaining an account may involve charges. Common examples include annual maintenance charges, brokerage, transaction charges, taxes and fees connected with selling or moving holdings. The names, amount and eligibility of charges vary by provider and product, so read the schedule before choosing an account. “Zero brokerage” does not mean every part of every transaction is free.',
        'Security is boring until it matters. Keep your phone, email and broker login protected; use a unique password and multi-factor authentication where available; never share an OTP; and review contract notes and account statements. A legitimate provider should make records available. If something you do not recognise appears, contact the provider through an official channel promptly. The account is a record of real ownership, so treat access to it seriously.'
      ] },
      { heading: 'Recap: the point of the locker', paragraphs: [
        'A demat account is a holding account for investments, not a promise of returns and not a replacement for a bank account. It matters when you buy and hold listed securities, because it is where electronic ownership is recorded. Knowing the distinction between bank, trading and demat accounts makes the rest of an investing app much less mysterious.'
      ], check: ['If you buy a listed share, where does the share end up after settlement?', 'Does a demat account hold the cash you use for every purchase?', 'Why might a bonus issue change the number of shares without automatically making you richer?'] }
    ]
  },
  {
    slug: 'sips', category: 'Investing', minutes: 10, title: 'SIPs: the slow-and-steady way to invest',
    standfirst: 'A systematic investment plan, or SIP, is a way of investing regularly. It is a habit and instruction—not a special investment product or a guarantee.',
    sections: [
      { heading: 'A SIP is an instruction, not a fund', paragraphs: [
        'A SIP tells a mutual fund to invest a chosen amount at regular intervals, often monthly. The mutual fund is the investment vehicle; the SIP is the routine used to buy units of it. This distinction sounds tiny, but it stops a common confusion. You do not compare “SIP versus mutual fund” in the same way you compare tea versus coffee. A SIP is more like choosing to buy your tea on the first day of every month.',
        'For example, Aarav can instruct a fund to invest ₹2,000 on the 5th of each month. The money buys units at the applicable net asset value, or NAV, for that purchase. Some months the NAV is higher, some months lower. His contributions can stay exactly ₹2,000 while the number of units purchased changes. That is the core mechanic.'
      ], terms: [['Mutual fund', 'A pool of money invested according to a stated objective by a fund manager or system.'], ['NAV', 'Net asset value: the per-unit value used to calculate mutual-fund unit purchases and redemptions.'], ['Unit', 'A small slice of a mutual fund; similar in spirit to a share, but not ownership of one single company.']] },
      { heading: 'Why the number of units moves around', paragraphs: [
        'Imagine ₹2,000 arrives when a fund’s NAV is ₹100. It buys 20 units before any applicable details specific to that scheme. Another month the NAV is ₹80, so the same ₹2,000 buys 25 units. If the NAV is ₹125, it buys 16 units. A fixed rupee amount therefore tends to collect more units when the price is lower and fewer when it is higher.',
        'This pattern is often called rupee-cost averaging. It can help make regular investing emotionally easier because you are not trying to choose one perfect entry date. But it does not prevent loss, guarantee a profit or make a weak fund good. It is simply the arithmetic result of buying a fixed amount at changing prices.'
      ], example: 'Three monthly ₹2,000 purchases at NAVs of ₹100, ₹80 and ₹125 buy 20 + 25 + 16 = 61 units. The total invested is ₹6,000. The value later depends on the fund’s future NAV.' },
      { heading: 'The boring part is the useful part', paragraphs: [
        'A regular plan can turn investing from a dramatic decision into a budget line. It may fit a long-term goal because it asks a smaller question each month: can I afford this contribution, and does it still match my plan? It does not require you to predict tomorrow’s market headline. For a student or new earner, starting with an amount that does not disrupt necessities is usually more sustainable than choosing an exciting amount and cancelling it three months later.',
        'That makes a SIP a behaviour tool. Automation can reduce the temptation to postpone every contribution until there is a “better time.” Still, automatic does not mean ignore it forever. Review the amount, the fund’s purpose, your goal date and your financial situation periodically. A plan you no longer understand is not automatically a good plan just because it is running.'
      ] },
      { heading: 'When markets fall', paragraphs: [
        'A falling market is where a SIP’s story becomes emotionally difficult. Your existing units may be worth less for a while. At the same time, the next fixed contribution may buy more units at a lower NAV. Neither fact tells you exactly what happens next. Markets can recover, stay low or move lower. The point is that a SIP gives you a consistent process; it does not give you certainty about the outcome.',
        'Stopping a SIP solely because the screen is red can lock in a reaction without considering the original goal, time horizon or need for the money. Continuing automatically can also be wrong if the money is needed soon or the original choice no longer suits you. Good decisions depend on context, not on a slogan such as “never stop during a crash.”'
      ], misconception: '“A SIP guarantees average returns.” It does not. It averages the purchase price of units over time, not the return. The fund can still deliver a disappointing or negative result.' },
      { heading: 'Step-ups, fees and the goal behind the number', paragraphs: [
        'A step-up SIP increases the contribution on a schedule, perhaps after an expected salary increase. It can be useful if your income rises and you have already kept an emergency cushion and essential costs in view. It is not useful merely because a larger number looks more serious. The best contribution is one you can sustain without borrowing or sacrificing basics.',
        'Before starting, read the scheme information, risk level, expense ratio, exit-load rules and tax treatment that apply to your situation. An expense ratio is the ongoing cost charged by a fund, expressed as a percentage. Small annual costs can matter over long periods. Also check whether the goal has a fixed date: money needed for a near-term fee payment or rent deposit should not casually be treated like a distant, volatile investment goal.'
      ] },
      { heading: 'Recap: a repeatable instruction', paragraphs: [
        'A SIP invests a fixed amount at regular intervals into a chosen fund. It buys a changing number of units because NAV changes. Its strengths are consistency, budgeting and reducing the pressure to time every purchase. Its limits are equally important: returns are not guaranteed, fund choice still matters, and time horizon matters.'
      ], check: ['What is the difference between a SIP and a mutual fund?', 'When NAV is lower, what happens to the number of units bought by the same ₹2,000?', 'Name one reason a SIP might need reviewing even if the auto-debit is working.'] }
    ]
  },
  {
    slug: 'stocks', category: 'Markets', minutes: 10, title: 'What does a stock actually do?',
    standfirst: 'A stock is a share of ownership in a company. Understanding that single idea makes prices, dividends and headlines much easier to read.',
    sections: [
      { heading: 'A slice of a real business', paragraphs: [
        'A share represents a small ownership stake in a company. If a company has one million shares and you own one, your slice is tiny—but it is still a slice of the business, not a digital lottery ticket. Owners can benefit if the business grows in value or shares some profits, and they can lose money if the business struggles or the market decides the share is worth less.',
        'Companies issue shares to raise equity capital: money from owners rather than a loan that must be repaid on a schedule. The company may use that money to build products, expand, hire or reduce debt. Once shares are listed, investors can usually buy and sell them from each other in the secondary market. The company does not receive cash every time two people trade an already-listed share.'
      ], terms: [['Equity', 'Ownership in a business.'], ['IPO', 'Initial public offering: an early public sale of a company’s shares.'], ['Secondary market', 'The market in which investors trade shares with other investors after issuance.']] },
      { heading: 'Price is not the same as value', paragraphs: [
        'A ₹2,000 share is not automatically “more expensive” than a ₹200 share. One company might have far fewer shares outstanding; another might be much larger. Market capitalisation, often shortened to market cap, is share price multiplied by the number of shares outstanding. It is one quick way to describe the market value placed on the whole company.',
        'Price is the latest amount someone paid or was willing to pay in the market. Value is a harder judgment about what the business may earn, own and become over time. They influence each other, but they are not identical. A price can move today because of expectations, interest rates, an earnings result, a rumour, a broad market sell-off or simple changes in buyer and seller demand. None of those moves proves a company changed by the same percentage overnight.'
      ], example: 'Company A has 10 lakh shares at ₹100: market cap ₹10 crore. Company B has 1 lakh shares at ₹500: market cap ₹5 crore. The higher share price belongs to the smaller market cap in this example.' },
      { heading: 'How owners may benefit', paragraphs: [
        'There are two commonly discussed routes. A share price can rise, allowing an owner to sell at more than they paid—though only if a buyer exists at that price, and taxes and costs matter. A company may also declare a dividend, which is a distribution from profits or reserves under its stated terms. Dividends are not compulsory, and a company that pays none is not automatically bad; it may be using cash to grow the business.',
        'A growing business is not a promise that its stock will grow every year. Markets look forward and can already expect good news, while a profitable company can face competition, debt, weak management or a high valuation. This is why “the company makes money” is a starting point for learning, not the entire investment thesis.'
      ] },
      { heading: 'The three numbers beginners meet', paragraphs: [
        'Revenue is the money a business brings in from sales before many costs are subtracted. Profit is what remains after applicable costs, interest and taxes. Earnings per share, or EPS, divides profit attributable to shareholders by the number of shares. These are useful labels, but they need context: a one-time asset sale can boost a period’s profit, and revenue growth can be costly if margins collapse.',
        'When reading a company, ask plain questions. What does it sell? Who pays for it? Is demand growing? What costs or debt could hurt it? How does it compare with competitors? What could change the story? A beginner does not need to predict every spreadsheet line. The aim is to connect the ticker symbol to a real business and to notice what you do not yet know.'
      ] },
      { heading: 'Splits, bonuses and hype', paragraphs: [
        'A stock split increases the number of shares while reducing the price per share in proportion. A bonus issue distributes additional shares under stated terms. Both can make a holding look numerically different without creating instant business value. The useful question is not “How many shares did I get?” but “What percentage of the company do I now own, and what is the whole business worth?”',
        'Social media often frames a stock as a race to enter before everyone else. That story hides the important questions: what is your reason for owning it, how long can you hold it, what could prove you wrong, and can you afford a drop? A tip is not research. Urgency is not a reason.'
      ], misconception: '“If I own one share, I cannot lose much.” The rupee amount may be small, but the percentage loss can still be large. Position size changes the money impact; it does not change the business risk.' },
      { heading: 'Recap: ownership first', paragraphs: [
        'A stock is a piece of a business. Its market price moves as buyers and sellers react to facts and expectations. Owners may receive dividends or sell at a gain, but neither is guaranteed. Begin with the business, not the chart, and remember that a share price alone tells you very little about how large or healthy a company is.'
      ], check: ['What is the difference between a share price and market capitalisation?', 'Does a company receive money every time two investors trade its listed shares?', 'Why can a stock split change the screen without making owners instantly wealthier?'] }
    ]
  },
  {
    slug: 'compounding', category: 'Money basics', minutes: 10, title: 'Compound interest needs time, not cleverness',
    standfirst: 'Compounding means returns can themselves begin earning returns. It is powerful because of time and consistency, not because it makes every investment safe.',
    sections: [
      { heading: 'Interest on interest', paragraphs: [
        'Simple interest is calculated only on the original amount. Compound growth adds each period’s return to the base for the next period. If ₹1,000 grows by 10% once, it becomes ₹1,100. If it grows by 10% again, the second 10% is calculated on ₹1,100, producing ₹1,210. The extra ₹10 is the return earning a return.',
        'This is a mathematical pattern, not a market promise. A fixed deposit may state an interest rate and compounding frequency. A market investment has changing returns and can fall. In both cases, reinvesting what is earned rather than taking it out can create a compounding effect. The path and reliability are very different.'
      ], terms: [['Principal', 'The original amount invested or lent.'], ['Compounding', 'Growth calculated on both the starting amount and earlier growth.'], ['Return', 'The gain or loss from an investment, often shown as a percentage.']] },
      { heading: 'Time does much of the work', paragraphs: [
        'Early years often look underwhelming. That is because the base is still small. Later, the same percentage is applied to a larger accumulated amount, so the rupee growth can become more visible. This is why charts of compounding curve upward instead of rising in a straight line when the rate is positive and steady.',
        'Starting earlier can give money more periods to compound, but “start immediately at any cost” is a bad lesson. High-interest debt, no emergency savings or money needed next year may deserve attention first. Time is helpful only when the money can genuinely stay invested and the risk matches the goal.'
      ], example: 'At a hypothetical steady 8% annual growth, ₹10,000 becomes about ₹14,693 after five years and about ₹21,589 after ten years. This illustration excludes fees, taxes and the fact that market returns are not steady.' },
      { heading: 'Regular contributions change the picture', paragraphs: [
        'Most people do not invest one perfect lump sum and walk away. They add money periodically. Each monthly contribution gets its own amount of time to grow: the first contribution has the longest runway, while the last has almost none yet. That is why a SIP calculator asks for monthly amount, years and assumed return.',
        'A calculator can make the trade-off visible. Increasing the monthly contribution helps. Extending the time horizon helps. A higher assumed return raises the illustration, but it also may imply more uncertainty; you cannot safely choose a number just because it produces a nicer result. Use conservative scenarios and remember that real paths include good and bad years.'
      ] },
      { heading: 'Inflation is the quiet counterweight', paragraphs: [
        'A future rupee does not necessarily buy what a rupee buys today. Inflation is the general rise in prices over time. If your savings grow 7% but prices rise 5%, the increase in purchasing power is much smaller than the headline number suggests. This is why long-term planning talks about real returns: returns after considering inflation.',
        'Inflation does not mean every investment must chase the highest possible return. It means goals should be stated in future costs. A course that costs ₹2 lakh today may cost more by the time you need it. The investment’s risk, time horizon and likely purchasing power all belong in the same conversation.'
      ] },
      { heading: 'Fees are negative compounding', paragraphs: [
        'Costs matter because they reduce the amount left to grow. An annual fee can look small next to a return estimate, but it applies year after year. Taxes, fund expenses, brokerage and exit costs can also affect what you keep. The lesson is not that all fees are bad; it is that they deserve to be visible.',
        'Be wary of examples that present one smooth upward line as normal. Markets do not compound in a neat monthly pattern. A portfolio can fall and later recover, or not recover on your preferred schedule. Compounding describes what happens when returns are reinvested over time; it does not erase volatility, fees, inflation or bad decisions.'
      ], misconception: '“Compounding is a guaranteed shortcut to being rich.” It is neither guaranteed nor quick. Its ordinary strength is that small, repeated actions have more time to matter.' },
      { heading: 'Recap: use time wisely', paragraphs: [
        'Compounding is return on earlier return. It becomes more noticeable over long periods and with regular additions, but the actual result depends on returns, costs, taxes, inflation and whether the money stays invested. Try the calculator to compare timelines, then treat every output as an illustration rather than a prediction.'
      ], check: ['Why is the second year of 10% growth calculated on ₹1,100 rather than ₹1,000?', 'What is a real return trying to account for?', 'Why can a small annual fee matter over a long period?'] }
    ]
  },
  {
    slug: 'risk', category: 'Money basics', minutes: 10, title: 'Risk: what the word means before you invest',
    standfirst: 'Risk is not just a scary word for market drops. It is the possibility that an outcome differs from what you need, expect or can afford.',
    sections: [
      { heading: 'Risk is about your goal, not only the graph', paragraphs: [
        'People often use risk to mean “the price might fall.” That is one kind of risk, usually called market risk. But a safer-looking choice can also be risky if it will not grow enough to meet a long-term goal after inflation. Holding all your money in one company brings concentration risk. Needing to sell during a bad week brings timing risk. The useful question is: what could stop this money from doing the job I need it to do?',
        'Two people can face the same investment and experience different levels of risk. Someone saving for a payment due next month has little ability to wait through a fall. Someone saving for a far-away goal may have more time, though not unlimited emotional comfort. Risk capacity is the ability to absorb a loss financially; risk tolerance is how much uncertainty you can emotionally live with. They are related, but they are not the same.'
      ], terms: [['Volatility', 'How sharply and frequently an investment’s price moves up and down.'], ['Risk capacity', 'Your practical ability to handle loss or delay without harming essential needs.'], ['Diversification', 'Spreading money across different investments rather than depending heavily on one.']] },
      { heading: 'The risks hiding behind a simple purchase', paragraphs: [
        'Market risk is the chance that broad conditions push prices down. Company risk is the chance that one business performs badly. Liquidity risk means you may not be able to sell quickly at a fair price. Credit risk matters when a borrower may fail to repay. Inflation risk is the chance that purchasing power declines. Fraud and operational risk include misleading schemes, account compromise and process failures.',
        'Naming risks does not mean you can eliminate them all. It helps you avoid treating “high return” as the only column in a decision. A product can have a long description, a famous brand or a polished app and still be unsuitable for a particular goal. Read what it owns, how it can lose money, what it costs and when you can access your money.'
      ] },
      { heading: 'Time horizon changes the conversation', paragraphs: [
        'Time horizon is when you expect to need the money. It is one of the most practical risk tools because it shapes how much short-term movement you may be able to accept. Rent due in three months and retirement decades away are not the same problem. The first needs reliability and access; the second may need growth that keeps pace with changing future costs.',
        'Do not confuse a long horizon with a licence to ignore losses. A large fall can test your plan, especially if you borrowed, concentrated everything in one idea or chose an amount that keeps you awake. A good plan is one you understand well enough to follow through normal market noise, while still revisiting it when life changes.'
      ], example: 'Nisha needs ₹30,000 for an exam fee in six months. Even a potentially higher-returning investment may be a poor match if its value could be lower exactly when the fee is due. Goal date comes before excitement.' },
      { heading: 'Diversification is a seatbelt, not a force field', paragraphs: [
        'Diversification spreads exposure so one bad outcome does not decide everything. A broad fund can hold many companies; a portfolio can also vary across asset types and regions, depending on the product. The aim is not to own a random collection of names. It is to avoid letting one company, sector or story carry more weight than you can afford.',
        'Diversification cannot promise a gain. During a broad market fall, many assets can decline together. It can, however, reduce the damage caused by one company collapsing or one narrow bet going wrong. Its benefit often feels least exciting when it is doing its job, because the portfolio may not own the one thing everyone is talking about.'
      ] },
      { heading: 'Common traps are behavioural too', paragraphs: [
        'FOMO—fear of missing out—can turn a headline into a purchase. Recency bias makes recent gains look permanent and recent losses look endless. Overconfidence makes a few lucky decisions feel like proof of special skill. None of these are character flaws; they are normal mental shortcuts. A written reason for a decision, a sensible limit per idea and a pause before acting can reduce their influence.',
        'Avoid borrowing or using money set aside for necessities to chase an investment return. Be cautious with promises of assured high returns, pressure to act immediately, unregistered tip groups and screenshots presented as proof. If something cannot be explained plainly—including how it earns money and how you get it back—slowing down is a strength.'
      ], misconception: '“Low risk means no risk.” Cash can lose purchasing power to inflation; a deposit can have access limits; any provider can have terms. Lower risk is a comparison, not an absolute guarantee.' },
      { heading: 'Recap: make risk specific', paragraphs: [
        'Risk means the chance your outcome will not match your need. Make it concrete: when is the money needed, what loss could you handle, what is the investment exposed to, and are you over-dependent on one outcome? Diversification, time horizon, product understanding and calm behaviour are tools—not promises.'
      ], check: ['Why can the same investment be riskier for someone with a near-term goal?', 'What is one risk diversification can reduce and one it cannot eliminate?', 'What is the difference between risk tolerance and risk capacity?'] }
    ]
  },
  {
    slug: 'exchanges', category: 'Markets', minutes: 10, title: 'NSE, BSE, and the place where shares trade',
    standfirst: 'NSE and BSE are exchanges: organised marketplaces where buyers and sellers can trade listed securities under rules and systems.',
    sections: [
      { heading: 'An exchange is a marketplace, not a tip channel', paragraphs: [
        'The National Stock Exchange (NSE) and BSE are India’s major stock exchanges. Their job is to provide an organised, regulated venue and systems through which orders to buy and sell listed securities can be matched. They are part of the market’s infrastructure, alongside brokers, clearing corporations, depositories and regulators.',
        'You usually do not call an exchange and ask to buy a share. You use a registered broker, which accepts and routes your order. The exchange’s matching system brings together compatible buy and sell orders. This process helps create a transparent market price, though it cannot promise that a price will always move in your favour or that every order will execute at the number you hoped for.'
      ], terms: [['Exchange', 'A regulated marketplace and system for trading eligible securities.'], ['Broker', 'An intermediary that places or routes client orders and provides trading access.'], ['Listed', 'Approved for trading on an exchange after meeting applicable requirements.']] },
      { heading: 'What happens when you press Buy', paragraphs: [
        'A market order generally asks to buy or sell at the best available price, so the final price can differ from the number you saw a moment ago in a fast-moving market. A limit order lets you state a maximum price to buy or minimum price to sell, but it may not execute if the market never reaches that price. The exact order types available depend on your broker and market rules.',
        'When an order is matched, the trade is executed. Clearing and settlement then arrange the exchange of money and securities. After the applicable settlement process, the shares are credited to the buyer’s demat account and the seller receives the proceeds through the relevant system. The details may feel hidden in an app, yet each role exists to make a large number of transactions more orderly.'
      ], example: 'If you place a limit buy at ₹100, it will not normally fill above ₹100. It might fill below ₹100, fill partly, or not fill at all. A limit controls price, not certainty of execution.' },
      { heading: 'Why two exchange names appear', paragraphs: [
        'A company may be listed on one or more exchanges, subject to the relevant requirements. You may see the same company quoted on NSE and BSE with prices that are often close but can differ slightly at a moment because trading activity and orders differ. Your broker generally shows the exchange selected for an order or lets you choose where applicable.',
        'The important beginner point is not to memorise every operational difference. It is to understand that NSE and BSE are venues where trading happens, not two separate versions of the company. A share remains ownership in the same underlying business. The venue is the marketplace used for the transaction.'
      ] },
      { heading: 'Indices are scoreboards, not portfolios', paragraphs: [
        'You will often hear NIFTY and SENSEX in market news. An index is a designed measure that tracks a selected group of securities according to rules. It provides a shorthand for how a part of the market is moving. It is not itself a company, and hearing that an index rose does not mean every stock rose or that your particular holding did.',
        'An index can be useful for context and comparison, but it can also make market news sound like a sports score. The number is a summary of many moving pieces. Before reacting, ask what it measures, how it is constructed and whether it is relevant to the goal you are thinking about.'
      ] },
      { heading: 'Rules, records and healthy scepticism', paragraphs: [
        'Indian securities markets are regulated, with SEBI playing an important oversight role. Regulation and exchange rules aim to support fair dealing, disclosure and investor protection. They do not make every investment safe, erase losses or guarantee that a company will perform well. Good infrastructure lowers some risks; it cannot remove the basic uncertainty of owning investments.',
        'Keep your contract note and transaction records, and use official broker and exchange channels when checking a trade. Be especially careful with messages claiming an “exchange tip,” a guaranteed target or a limited-time inside opportunity. Exchanges provide markets; they do not turn forwarded social posts into research.'
      ], misconception: '“If a share trades on NSE or BSE, it must be a good investment.” Listing is not a personal recommendation. You still need to understand the business, price, risks and whether it suits your goal.' },
      { heading: 'Recap: the place where orders meet', paragraphs: [
        'NSE and BSE are organised exchanges. A broker routes your order, the exchange matches it, and clearing, settlement and depository systems complete the transfer. Order type affects how price and execution work. Indices are useful scoreboards, while a listed security still needs your own careful understanding.'
      ], check: ['What is the difference between a market order and a limit order?', 'Why can the same listed company have slightly different quotes across venues?', 'Does an index rising mean every stock rose?'] }
    ]
  }
,
  {
    "category": "Money basics",
    "check": [
      "Which four broad groups can help you begin a simple spending plan?",
      "Why is a buffer useful even when your regular expenses seem predictable?",
      "What should you check before agreeing to a purchase involving borrowing or instalments?"
    ],
    "minutes": 8,
    "sections": [
      {
        "heading": "A budget is a plan, not a punishment",
        "paragraphs": [
          "A budget is a simple plan for using money you expect to receive. It helps you cover needs, make room for enjoyment, and set aside something for future goals. For an Indian teen, money might include pocket money, gifts, tutoring income, or occasional family support. The purpose is awareness and choice, not proving that every rupee was spent perfectly.",
          "Start with broad groups instead of tracking every tiny detail: needs, fun, saving, and giving or sharing. Needs may include school travel, phone data, supplies, or a contribution agreed with family. Fun could include snacks, games, cinema, or outings. A useful plan leaves some flexible money, because real life includes surprises and changing priorities."
        ]
      },
      {
        "heading": "Build a flexible spending map",
        "paragraphs": [
          "For one month, write down money coming in and common expenses, using notes, a spreadsheet, or a paper diary. Separate regular costs from irregular ones, such as festival gifts, exam materials, birthdays, or a repair. If income is uncertain, plan from a lower, reliable estimate rather than counting money that may not arrive. Never share account passwords or payment PINs while tracking spending.",
          "Then choose limits that match your actual situation. Reserve money for essentials first, choose a small saving amount, and divide the rest between fun and a buffer. A limit is a signal to pause, not a moral score. If one category runs out, reduce another, delay the purchase, or revise next month instead of borrowing impulsively."
        ],
        "terms": [
          [
            "Fixed expense",
            "A cost that is usually similar each time, such as an agreed travel pass."
          ],
          [
            "Flexible expense",
            "A cost that can change, such as snacks, entertainment, or small online purchases."
          ],
          [
            "Buffer",
            "Money kept available for an unexpected or irregular expense."
          ]
        ]
      },
      {
        "example": "Suppose you receive ₹1,200 for a month. You might first note ₹400 for agreed travel and supplies, set aside ₹200 for a goal, keep ₹150 as a buffer, and leave ₹450 for food treats, entertainment, and other flexible choices. The exact amounts are not a rule; the example shows how a plan can include both responsibility and enjoyment.",
        "heading": "Enjoying money while protecting future you",
        "paragraphs": [
          "Saving does not have to mean removing every enjoyable activity. A small, clearly named goal—such as a course, headphones, a trip, or an emergency cushion—can make saving feel connected to something real. Keep the goal and time frame realistic, and remember that savings may lose buying power over time as prices change. Never treat a budget as a promise that money will grow.",
          "A practical habit is a weekly ten-minute check-in: compare your plan with reality, notice one helpful choice, and adjust one limit. You can use cash, a bank account, or a payment app, but convenience can make spending feel invisible. Review transaction alerts and receipts, and be cautious with tempting offers, hidden fees, subscriptions, and requests for one-time passwords."
        ]
      },
      {
        "heading": "When the plan needs changing",
        "misconception": "Misconception: A good budget means never spending on fun. In reality, a sustainable plan can include enjoyment; the key is knowing the limit, protecting essentials, and accepting that plans sometimes need revision.",
        "paragraphs": [
          "Budgets have limits. They cannot create money when costs rise, replace a trusted adult or qualified adviser for complicated decisions, or guarantee that an emergency will be affordable. If money is tight, essentials and safety come first, and it may be appropriate to discuss the situation with a parent, guardian, school counsellor, or another trusted adult. Avoid shame and avoid hiding a problem.",
          "Be especially careful when a purchase depends on borrowing, instalments, late fees, or pressure from friends. Missing a repayment can create extra costs or conflict, while sharing financial details can expose you to scams. Before agreeing, understand the total amount, due dates, cancellation terms, and who is responsible. A budget is a learning tool, not personalized financial advice or a guarantee of results."
        ]
      }
    ],
    "slug": "budgeting",
    "standfirst": "A flexible budget can help you enjoy today, prepare for tomorrow, and notice where your money goes without turning every snack into a guilt trip.",
    "title": "Budgeting Without Making Life Miserable"
  },
  {
    "category": "Money basics",
    "check": [
      "Which situation is most likely to count as an emergency-fund use: a sudden medicine bill, a planned gaming purchase, or a festival outfit chosen months in advance?",
      "Why can keeping emergency money in a risky or locked investment create a problem even if it might earn more?",
      "After using part of the fund, what are two sensible next steps before trying to rebuild it?"
    ],
    "minutes": 8,
    "sections": [
      {
        "heading": "What an emergency fund does",
        "paragraphs": [
          "An emergency fund is a separate pool of money for necessary, unplanned costs. In India, examples might include a sudden medical bill, urgent travel to help family, a phone or laptop needed for school, or a parent facing a short gap in income. It is not for regular snacks, sale shopping, festival gifts, or a planned purchase you forgot to budget for.",
          "Think of this fund as a money seatbelt: it may not prevent a problem, but it can reduce the damage. Without ready cash, a household might delay an important payment, ask relatives, use credit, or sell an asset at a bad time. An emergency fund cannot solve every crisis, and it does not replace insurance, a realistic budget, or support from trusted adults."
        ],
        "terms": [
          [
            "Emergency fund",
            "Money set aside for necessary, unexpected expenses."
          ],
          [
            "Essential expense",
            "A cost linked to safety, health, housing, food, education, or basic transport."
          ],
          [
            "Liquidity",
            "How quickly money can be accessed without a major loss in value."
          ]
        ]
      },
      {
        "example": "If Riya receives ₹2,000 as occasional allowance and spends ₹1,500 on regular needs, she might save part of the remaining ₹500 until she has ₹3,000 for urgent school or travel costs. That is a starting cushion, not a guarantee that every emergency will be covered.",
        "heading": "How much is enough?",
        "paragraphs": [
          "There is no single correct amount for every person. Start by listing essential monthly costs, such as food, transport, school needs, medicines, and household bills, then consider how predictable income is. A family whose income changes often may need a larger buffer than one with stable support. Teens can begin with a small, realistic target instead of copying an adult’s number.",
          "Build the fund in stages: first aim for a small cushion, then review whether it could cover one important surprise, and later consider several weeks or months of essential costs as a household goal. Costs can rise, emergencies can last longer, and several problems can arrive together. Never drain money needed for food, fees, medicines, or another immediate responsibility just to hit a target."
        ]
      },
      {
        "heading": "Where to keep it and what can go wrong",
        "misconception": "“An emergency fund is wasted because it earns little.” Its main job is availability and protection, not maximum growth. A modest return may be acceptable if the money remains accessible and its risks are understood.",
        "paragraphs": [
          "Emergency money should be easy to reach, clearly separated from daily spending, and held somewhere the account holder understands. A bank savings account may be convenient, but access rules, scams, outages, and account conditions still matter. If a teen uses an account, a parent or guardian may need to help with ownership, permissions, and safe access.",
          "The fund should not be exposed to large price swings or locked away when an urgent bill is due. Chasing higher returns can create a withdrawal delay or a loss when money is needed. Cash kept at home can be stolen or misplaced, while keeping everything in cash can lose purchasing power over time. Compare safety, access, and transparency; do not assume any option is risk-free."
        ]
      },
      {
        "heading": "Using, replacing, and improving the fund",
        "paragraphs": [
          "Use the fund when a cost is both urgent and necessary, after checking whether another safe source, such as an existing budget category or available insurance, applies. Tell a trusted adult before making a major decision, especially for health, travel, or family emergencies. Write down what was used and why. This helps distinguish a genuine emergency from a recurring expense needing a new budget line.",
          "After using the fund, rebuild it gradually rather than taking risky shortcuts. Review it when school, rent, transport, health needs, or family income changes. Protect access with strong passwords, two-factor authentication where available, and caution around links or requests for OTPs. An emergency fund is a tool for resilience, not a promise that money problems will disappear."
        ]
      }
    ],
    "slug": "emergency-fund",
    "standfirst": "An emergency fund is money kept ready for unexpected needs, helping one surprise cause less financial damage. Learn what it is for, how to build a realistic cushion, where access and safety matter, and what limits it has.",
    "title": "Emergency funds: your money seatbelt"
  },
  {
    "category": "Money basics",
    "check": [
      "Which account is generally intended for personal saving with accessible money and possible interest: a savings account or a current account?",
      "Why should you check an account’s minimum-balance rules, transaction limits, and charges before using it?",
      "Why is an overdraft not the same as money you have earned or saved?"
    ],
    "minutes": 8,
    "sections": [
      {
        "heading": "What a bank account does",
        "paragraphs": [
          "A bank account is a record of money held with a bank in your name. You can add money through cash, transfers, UPI-linked payments, or other permitted methods, then withdraw or transfer it later. In India, people commonly use accounts for receiving pocket money, salaries, scholarships, bills, and payments without carrying all their cash.",
          "An account is not a magic money box: access may depend on your balance, identity checks, transaction limits, bank systems, and the account’s rules. Banks may charge for some services, and an account can be closed or restricted in specific situations. Read the schedule of charges and basic terms rather than assuming every service is free or unlimited."
        ],
        "terms": [
          [
            "Balance",
            "The amount recorded in an account at a particular time."
          ],
          [
            "Deposit",
            "Money added to a bank account."
          ],
          [
            "Withdrawal",
            "Money taken out of an account or transferred away."
          ]
        ]
      },
      {
        "example": "If ₹5,000 stays in an account, the interest earned depends on the bank’s stated method, applicable rate, balance calculation, and time held. A simple yearly percentage is only an illustration, not a promise of what any particular account will pay.",
        "heading": "Savings accounts: for setting money aside",
        "paragraphs": [
          "A savings account is generally designed for individuals to keep money safely accessible while earning some interest. It can suit goals such as building an emergency cushion or holding money needed in the near future. Banks may provide a debit card, online banking, and statements, but features, minimum balances, and charges vary between accounts.",
          "Interest is the amount a bank pays for using your deposited money, usually expressed as a percentage over a year. The exact calculation and crediting schedule depend on the account’s terms, so the number shown in an advertisement may not equal the amount you receive in every situation. Interest can also have tax implications; a trusted adult or qualified professional can explain relevant details."
        ]
      },
      {
        "heading": "Current accounts: for frequent transactions",
        "misconception": "Misconception: A current account is simply a savings account with more money. In reality, its purpose, charges, interest treatment, and transaction rules can differ substantially.",
        "paragraphs": [
          "A current account is mainly built for regular business or high-volume transactions, such as payments received and made by a shop or organisation. It may offer convenient transfers and payment tools, but it commonly has different balance requirements, transaction conditions, and fee structures from a savings account. An individual should not assume it is automatically the better everyday choice.",
          "Current accounts often do not work like savings accounts for earning interest, though the treatment depends on the product’s terms. Overdraft facilities, when offered, are borrowed money rather than free extra balance. Using one can create interest and fees, and eligibility is not guaranteed. Never treat an overdraft as income or spend it without understanding repayment obligations."
        ]
      },
      {
        "heading": "Choosing carefully and protecting access",
        "paragraphs": [
          "When comparing accounts, look beyond an interest percentage. Check minimum-balance rules, cash and transfer limits, ATM or card charges, digital access, alerts, customer support, and what happens if the account becomes inactive. Keep contact details updated and review statements for unfamiliar transactions. Deposit protection may have limits and conditions, so do not assume every possible loss is covered.",
          "Use strong, unique passwords, device locks, and official banking apps. Banks will not need your PIN, password, or one-time password to ‘unlock’ a payment; sharing them can let fraudsters take money. If a message or caller creates urgency, pause and verify through an official channel. This lesson is general education, not personalised financial advice or a recommendation of any bank."
        ]
      }
    ],
    "slug": "bank-accounts",
    "standfirst": "Savings and current accounts do different jobs. Learn how interest, fees, access, and safety can affect money kept in an Indian bank account.",
    "title": "Bank accounts and interest: where your money sits"
  },
  {
    "category": "Money basics",
    "check": [
      "A caller says you must enter your UPI PIN to receive a refund. What should you do, and why?",
      "Which details should you verify on the approval screen before paying through UPI?",
      "After noticing an unauthorised transaction, what evidence should you save and whom should you contact?"
    ],
    "minutes": 8,
    "sections": [
      {
        "heading": "Know what a UPI payment can and cannot do",
        "paragraphs": [
          "UPI lets you move money between bank accounts using an app, a UPI ID, a phone number, or a QR code. A payment usually needs you to approve it with your UPI PIN. The PIN is a secret authorisation, not a password to share with a caller. Treat every screen asking for approval as a real money decision, even when the amount looks small.",
          "A UPI ID or QR code can help someone send you money, but receiving money does not normally require you to enter your UPI PIN. To pay, you generally review the name, amount, and purpose before approving. Names can look familiar or be mistyped, and a successful-looking screen is not proof that the intended person received the money, so check your bank or app history too."
        ],
        "terms": [
          [
            "UPI ID",
            "An address used to identify a bank account for a UPI transfer."
          ],
          [
            "UPI PIN",
            "A confidential code used to authorise many UPI payments; never disclose it."
          ],
          [
            "QR code",
            "A scannable pattern that can open payment details, but does not by itself prove who will receive money."
          ]
        ]
      },
      {
        "example": "Someone messages that they accidentally sent you ₹2,000 and asks you to scan a QR code to return it. Do not scan or approve anything just because the story sounds urgent. Check your actual account history, and ask a trusted adult or the person through a known contact method before taking action.",
        "heading": "Recognise the warning signs of a scam",
        "misconception": "Misconception: scanning a QR code is only for receiving money. In many payment flows, scanning can prepare a payment request, so the final name, amount, and direction of money still need careful checking.",
        "paragraphs": [
          "Scammers often create urgency: they may claim your account will be blocked, a parcel is stuck, a prize will expire, or a refund needs immediate action. They may impersonate a bank, delivery worker, friend, teacher, or government office. Caller ID, logos, profile photos, and polite language can be copied, so identity should be checked through a trusted channel rather than the contact details supplied in the message.",
          "Pause when someone asks you to scan a QR code to receive money, install screen-sharing software, reveal a PIN or one-time code, or transfer a small amount to unlock a refund. A stranger may send a convincing payment request instead of money. Read the notification and authorisation screen slowly; if the wording, recipient, or amount is unclear, cancel and verify independently."
        ]
      },
      {
        "heading": "Use a calm, independent checking routine",
        "paragraphs": [
          "Before approving, stop and check three things: who is being paid, how much, and why. Open the payment app yourself instead of tapping a link in an unexpected message. Never share your PIN, one-time password, card details, or screen with someone who says they are helping. If a request is from a friend, confirm by calling a saved number or speaking face to face, especially when the request is unusual.",
          "If you notice an unauthorised payment or a mistake, act quickly: save screenshots and transaction details, tell a parent, guardian, or another trusted adult, and contact your bank and the payment app through their official in-app or website support. Do not argue with or pay a suspected scammer again. Reporting may help investigation, but it cannot guarantee that money will be recovered."
        ]
      },
      {
        "heading": "Build habits, and understand the limits",
        "paragraphs": [
          "Use a strong device lock, keep your phone and payment app updated, and avoid making payments on a shared or unsafe device. Set notifications so you can notice transactions, but remember that alerts can be delayed or missed. Review your account activity regularly. Your bank, app, or phone security can reduce risk, yet none can identify every dishonest request or reverse every approved payment.",
          "Good safety is not about never using digital payments; it is about refusing pressure and keeping control of each approval. A legitimate person can usually wait while you verify. If you are under 18, involve a trusted adult when money, identity documents, or a suspicious payment is involved. These habits are general information, not a promise of protection or personal financial advice."
        ]
      }
    ],
    "slug": "upi-safety",
    "standfirst": "Learn how UPI payments work, recognise pressure tactics, and build calm habits that protect your money and information.",
    "title": "UPI Safety: Spot Scams Before You Pay"
  },
  {
    "category": "Money basics",
    "check": [
      "How is a credit card different from a debit card, and why does that difference matter?",
      "Why can paying only the minimum amount due make a purchase more expensive?",
      "What should you do if a statement shows a transaction you do not recognise?"
    ],
    "minutes": 8,
    "sections": [
      {
        "example": "If you spend ₹3,000 on books and meals during a billing cycle, the statement may show ₹3,000 as the amount to repay. Paying the full amount by the due date can usually avoid interest on eligible purchases; paying only a small required amount leaves a balance to manage.",
        "heading": "What a credit card really does",
        "paragraphs": [
          "A credit card lets you pay a merchant using a short-term line of credit arranged by a bank or card company. You repay the amount later, usually through a monthly statement. It is not free money and it is not the same as a debit card: a debit card normally uses money already in your bank account, while a credit card creates a bill you must manage.",
          "Every card has a credit limit, the maximum balance the issuer allows at a time. A card may also offer a grace period for eligible purchases when the full statement balance is paid by the due date, but the exact rules can differ. Cash withdrawals, fees, delayed payments, and some transactions may be treated differently, so the card agreement and statement matter more than advertisements."
        ],
        "terms": [
          [
            "Credit limit",
            "The maximum outstanding balance the issuer permits."
          ],
          [
            "Statement balance",
            "The amount shown as due for a billing period."
          ],
          [
            "Due date",
            "The date by which the required payment must reach the issuer."
          ]
        ]
      },
      {
        "heading": "Why the trap can become expensive",
        "misconception": "Misconception: Paying the minimum due means the purchase is fully settled. In reality, it generally leaves a balance, and interest or other charges may continue under the card’s terms.",
        "paragraphs": [
          "If you do not pay the full statement balance, the unpaid amount may attract interest, often at a high annualised rate. Interest can keep adding to the balance, and new spending can make repayment harder. A late or missed payment may also lead to fees and could hurt your credit history. Exact costs depend on the issuer and the card terms.",
          "Paying the minimum amount due can prevent an account from immediately being treated as unpaid, but it is not a cost-free solution. It may leave most of the balance outstanding, so repayment takes longer and total cost rises. A credit limit is not a spending target. Using borrowed money for routine wants, emergencies, or someone else’s request can create pressure that is difficult to reverse."
        ]
      },
      {
        "example": "Suppose a statement lists ₹1,200 you do not recognise and ₹4,800 of purchases you made. Pause further use, contact the issuer using its verified app, website, or number, and follow its dispute process. Do not call a number sent by a suspicious message, and do not disclose security codes while investigating.",
        "heading": "Reading the bill and protecting yourself",
        "paragraphs": [
          "Before paying, check the statement period, each transaction, refunds, fees, interest, total amount due, minimum amount due, and due date. Report unfamiliar transactions through the issuer’s official channel and keep records of messages or complaints. Do not share an OTP, PIN, CVV, password, or full card details with callers, links, or people claiming to offer rewards.",
          "Safer use starts with a simple boundary: spend only what you can repay from money you already expect to have, and set a reminder before the due date. Review alerts and the available limit, but remember that an alert is not proof a transaction is genuine. Avoid storing card details on unnecessary websites, and never let urgency replace checking the merchant, amount, and payment screen."
        ]
      },
      {
        "heading": "When convenience is worth questioning",
        "paragraphs": [
          "Credit cards can offer convenient online or in-store payment, a consolidated record of spending, and sometimes benefits described in the card’s terms. Those features do not make every purchase cheaper. Annual fees, late fees, conversion charges, cash-advance costs, lost rewards, and other conditions can change the real price. A reward is useful only if it does not encourage extra spending or debt.",
          "For teenagers in India, eligibility and responsibility may involve a parent, guardian, or account holder, and issuers set their own requirements. Never borrow a card, lend one, or use another person’s card without clear permission and safe procedures. Treat credit as a repayment commitment, not as income. If a balance feels unmanageable, stop adding new spending and seek trusted, non-sales-based help rather than chasing another loan or card."
        ],
        "terms": [
          [
            "Annual fee",
            "A recurring charge that may apply simply for holding a card."
          ],
          [
            "Cash advance",
            "Taking cash through a credit card, which may have separate charges and interest rules."
          ],
          [
            "Credit history",
            "A record influenced by how credit accounts are handled over time."
          ]
        ]
      }
    ],
    "slug": "credit-cards",
    "standfirst": "A credit card can make payments convenient and help you track spending, but borrowed money becomes costly when bills are not paid on time. Learn how limits, statements, interest, fees, and safer habits fit together.",
    "title": "Credit cards: useful tool, expensive trap"
  },
  {
    "category": "Money basics",
    "check": [
      "Which statement is most accurate: a high score guarantees approval, or it is one risk signal considered with other information?",
      "Why is a lender’s hard enquiry different from checking your own credit report?",
      "If you find an unfamiliar account, what two safe actions could you take before sharing sensitive information with anyone?"
    ],
    "minutes": 8,
    "sections": [
      {
        "heading": "What a credit score actually means",
        "paragraphs": [
          "A credit score is a number created from information in your credit report, such as loans or credit cards, repayment history, balances, and recent applications. In India, scores from bureaus such as TransUnion CIBIL are commonly shown on a 300–900 scale, although different lenders and bureaus may use different models. A score is a quick risk signal, not a complete picture of you.",
          "Lenders may consider the score alongside income, existing obligations, job or business stability, documents, and their own rules. A high score does not guarantee approval, and a low or missing score does not prove that someone is irresponsible. Someone who has never borrowed may simply have little recorded history. The meaning of any score depends on the report and the lender’s decision process."
        ],
        "terms": [
          [
            "Credit report",
            "A record of borrowing accounts, repayment behaviour, and credit enquiries held by a credit bureau."
          ],
          [
            "Credit bureau",
            "An organisation that collects credit information and produces reports or scores."
          ],
          [
            "Credit score",
            "A numerical estimate based on report data that helps a lender assess credit risk."
          ]
        ]
      },
      {
        "example": "Suppose Riya has a card with a ₹20,000 limit and spends ₹6,000. Her utilisation is 30% before any payment. If she pays the billed amount by its due date, that is generally healthier than repeatedly carrying overdue amounts. The example is only an illustration: lenders do not all use identical thresholds, and paying on time cannot promise a particular score.",
        "heading": "The habits behind the number",
        "paragraphs": [
          "Payment history is important: repeatedly paying a due amount late can make future borrowing look riskier. Credit utilisation—the share of an available card limit being used—may also matter, as can the age and mix of accounts. These are general factors, not a secret formula. A score may change when lenders send updated information, and updates may not appear immediately.",
          "Applying for several loans or cards in a short period can create multiple hard enquiries, which lenders may interpret as a sign of active credit-seeking. Checking your own report is different from a lender’s enquiry and should not be treated as the same event. Closing an old account, increasing a limit, or paying one large amount may affect a report in ways that depend on the full account history."
        ]
      },
      {
        "heading": "Reading your report without panic",
        "misconception": "Misconception: “There is one permanent score that everyone sees.” In reality, reports can differ across bureaus or update dates, and a lender may use its own scorecard. Another misconception is that paying a fee can instantly delete accurate negative history. No legitimate shortcut can guarantee that outcome; accurate records generally require time and consistent repayment behaviour to change.",
        "paragraphs": [
          "Start by checking whether your name, date of birth, addresses, accounts, balances, and repayment entries look familiar. A report can contain errors, duplicate accounts, or an account that belongs to another person with a similar identity. Keep evidence such as statements or payment confirmations, but do not upload sensitive documents to an unknown website or share one-time passwords.",
          "If something is wrong, use the bureau’s official dispute process and, where relevant, contact the lender that supplied the information. Allow time for investigation and updates; a dispute does not automatically erase a genuine missed payment. You can ask a trusted adult to help understand the report, but protect account numbers, passwords, and identity details. If fraud is suspected, use official channels rather than paying a stranger to “repair” a score."
        ]
      },
      {
        "heading": "Limits, risks, and safer next steps",
        "paragraphs": [
          "A credit score can help a lender estimate repayment risk, but it cannot predict every future event. Medical costs, lost income, family emergencies, identity theft, or a lender’s changing policy can affect borrowing decisions. Borrowing only to build a score can create interest, fees, pressure, and missed-payment risk. A score should never be treated as a reason to take a loan you do not need or understand.",
          "For a safer learning routine, first understand the total repayment, due date, fees, and consequences of a product before signing anything. Keep a simple record of bills and review credit information periodically through an official source available to you. Never let anyone open an account in your name, borrow your login, or promise guaranteed approval. These steps support awareness, but they are not personalised financial advice or a promise of any score."
        ]
      }
    ],
    "slug": "credit-score",
    "standfirst": "A credit score is a signal about how you have handled borrowing, not a mark of your worth. Learn what it measures, what can change it, and how to check your report safely in India.",
    "title": "Credit scores without the mystery"
  },
  {
    "category": "Money basics",
    "check": [
      "Which two main components usually make up an EMI?",
      "Why can a longer tenure lower the EMI but increase the total repayment?",
      "Name two possible consequences of repeatedly missing loan payments."
    ],
    "minutes": 8,
    "sections": [
      {
        "heading": "What a loan really is",
        "paragraphs": [
          "A loan is money borrowed from a bank, registered non-banking finance company, or another lender under an agreement. You receive a principal amount and promise to repay it over time. The lender normally charges interest because it is giving up the use of its money. The agreement should state the repayment schedule, interest method, fees, late-payment consequences, and other important conditions.",
          "The amount you repay is not automatically the same as the amount you received. It can include principal, interest, processing or documentation charges, taxes where applicable, and penalties or other contract costs. A lower-looking interest rate may not mean a cheaper loan if fees are high or the repayment period is long. Read the full cost and key conditions, not only an advertisement headline."
        ],
        "terms": [
          [
            "Principal",
            "The original amount borrowed."
          ],
          [
            "Interest",
            "The cost charged for using borrowed money."
          ],
          [
            "Tenure",
            "The length of time allowed for repayment."
          ],
          [
            "Lender",
            "The organisation or person providing the loan."
          ]
        ]
      },
      {
        "example": "Suppose a person borrows ₹60,000 for one year. Ignoring fees and using a made-up interest rate for learning, the lender calculates interest under the agreed method and divides the total repayment into scheduled instalments. The exact EMI depends on the rate, compounding method, timing, and whether the rate can change; a simple division of ₹60,000 by 12 is not the full EMI calculation.",
        "heading": "EMIs: one payment, two moving parts",
        "paragraphs": [
          "An equated monthly instalment, or EMI, is a regular payment made each month for many loans. In a typical amortising loan, each EMI contains some principal and some interest. Early payments often contain a larger interest share because interest is calculated on a bigger outstanding balance. As the balance falls, the interest part generally falls and the principal part generally rises.",
          "An EMI is predictable only under the loan’s stated terms. A fixed-rate loan may keep its scheduled rate, while a floating-rate loan can change when its benchmark or reset terms change. A longer tenure can reduce the monthly amount but usually gives interest more time to accumulate. Ask for an amortisation schedule showing the balance, principal, and interest over the repayment period."
        ]
      },
      {
        "heading": "Compare total cost, not just the EMI",
        "misconception": "Misconception: A small EMI always means an affordable loan. Reality: a small EMI may come from a longer tenure, which can increase the total interest. Affordability also depends on stable income, essential expenses, emergencies, and the possibility that a floating rate or other cost may change. Never judge a loan from the monthly number alone.",
        "paragraphs": [
          "When comparing loans, look at the total amount payable: all scheduled EMIs plus compulsory charges and any stated insurance or service costs. Check whether interest is quoted per year, how it is calculated, and whether the rate is fixed or floating. Also check part-prepayment, foreclosure, bounce, and late-payment rules. Terms can vary, so two loans with the same amount and EMI may still cost different totals.",
          "A secured loan is backed by an asset, such as property, gold, or a vehicle. If repayments fail, the agreement may allow the lender to take steps against that security, subject to applicable rules and process. An unsecured loan does not use a pledged asset, but missed payments can still lead to collection action, extra charges, and damage to a borrower’s credit history. ‘No collateral’ does not mean ‘no risk.’"
        ]
      },
      {
        "heading": "What can go wrong—and how to read carefully",
        "paragraphs": [
          "Missing an EMI can trigger late charges or other consequences stated in the agreement. Repeated missed payments may make future borrowing harder because repayment behaviour can affect credit records. Borrowing from one source to repay another can create a debt cycle, especially when fees and interest keep adding up. Digital convenience does not remove the need to verify the lender, permissions, privacy terms, and every repayment condition.",
          "Before signing, check the sanctioned amount, money actually disbursed, annualised rate or equivalent disclosure, EMI date, tenure, total payable amount, security, fees, cancellation or prepayment terms, and what happens after a missed payment. Keep copies of the agreement and receipts. For teens, borrowing decisions usually involve a parent or guardian and may require legal eligibility; an educational lesson cannot decide whether any particular loan suits you."
        ]
      }
    ],
    "slug": "loans",
    "standfirst": "A loan gives you money now, but repayment usually includes the amount borrowed plus interest and possible fees. Learn how EMIs, total cost, security, and missed payments fit together in an Indian context.",
    "title": "How loans and EMIs actually work"
  },
  {
    "category": "Money basics",
    "check": [
      "If ₹100 buys fewer goods later, what has changed: the note’s face value or its purchasing power?",
      "Why might two Indian households feel different effects from the same overall inflation measure?",
      "Why is a positive rupee return not automatically a positive real return?"
    ],
    "minutes": 10,
    "sections": [
      {
        "example": "If a school lunch that cost ₹50 later costs ₹60, ₹100 buys two lunches before the increase but only one lunch plus ₹40 afterwards. The note is unchanged; its buying ability has fallen.",
        "heading": "What inflation really means",
        "paragraphs": [
          "Inflation is a broad rise in the prices of goods and services over time. If a snack, bus ride, notebook, or haircut costs more than it used to, ₹100 may buy fewer of them. Your ₹100 note has not physically shrunk, and its number has not changed. What changes is its purchasing power: the useful things that money can buy.",
          "Imagine keeping ₹100 in a drawer for several years. It would still be ₹100, but the same shopping list might cost more when you finally use it. Inflation is usually discussed as a percentage change in an overall basket, not the price of one item. One product can become cheaper while prices elsewhere rise, so one example cannot describe everything."
        ],
        "terms": [
          [
            "Inflation",
            "A general rise in prices that reduces money’s purchasing power."
          ],
          [
            "Purchasing power",
            "How much goods and services a given amount of money can buy."
          ]
        ]
      },
      {
        "heading": "Why prices rise—and why experiences differ",
        "misconception": "Inflation does not mean every price rises by the same amount. Prices can rise, fall, or stay steady at the same time, and an average measure may not match your household’s exact basket.",
        "paragraphs": [
          "Prices can rise for several connected reasons. Demand may grow faster than supply, or fuel, electricity, transport, wages, imported materials, or crops may become more expensive. A shop may pass some costs to customers. In India, weather can affect food supplies, while global events can influence energy and imported goods. Different causes can appear together.",
          "There is no single inflation experience for everyone. A family spending more on vegetables may feel food-price changes strongly; another may notice rent, school fees, or travel more. Official measures use representative baskets and averages, which help compare periods but cannot match every person’s spending. Location, household size, habits, and substitutions affect the personal impact."
        ]
      },
      {
        "heading": "Inflation, saving, and future goals",
        "paragraphs": [
          "Inflation matters when money will be used later. Suppose you need ₹1,000 for a purchase next year, but prices rise before then. The future price may be higher even though the goal has not changed. Keeping money in cash protects the number of rupees you hold, but not necessarily the future amount of goods those rupees can buy.",
          "Inflation also affects interest and returns. A saving option can show a positive rupee return while still failing to keep pace with rising prices. Comparing a return with inflation is useful, but estimates are uncertain and taxes, fees, access rules, and risk may matter too. Past inflation or past returns do not promise what will happen next."
        ],
        "terms": [
          [
            "Nominal amount",
            "The number of rupees shown on a note, account, price, or statement."
          ],
          [
            "Real value",
            "The purchasing power of money after considering changes in prices."
          ]
        ]
      },
      {
        "example": "For a class project, record the prices of five everyday items at two different times, note which changed, and discuss why the result may differ from an official average. The exercise shows how a basket, time period, and location shape an inflation experience.",
        "heading": "Thinking clearly about responses",
        "paragraphs": [
          "Learning about inflation does not mean chasing high returns or buying a particular product. Different choices have different risks: some may lose value, be difficult to access quickly, or produce returns that vary. A sensible comparison asks what the money is for, when it may be needed, what could go wrong, and whether the costs and conditions are understood.",
          "A useful habit is to track a few regular expenses, separate short-term needs from longer-term goals, and revisit assumptions when prices change. This is education, not personal financial advice. Inflation is only one factor; income changes, emergencies, taxes, fees, and unexpected price movements also matter. No method can guarantee beating inflation or avoiding loss."
        ]
      }
    ],
    "slug": "inflation",
    "standfirst": "Inflation means prices generally rise over time, so each rupee buys a little less. Learn how purchasing power changes, why different families experience inflation differently, and how to think about money decisions without confusing rising prices with guaranteed returns.",
    "title": "Inflation: Why the Same ₹100 Feels Smaller"
  },
  {
    "category": "Money basics",
    "check": [
      "Which branch of the tax map is usually built into the price of many goods and services?",
      "Why should a payslip showing tax deducted not be treated as proof that every reporting duty is complete?",
      "Name two records you could keep to make a future tax check easier."
    ],
    "minutes": 8,
    "sections": [
      {
        "heading": "1. The big picture: why taxes exist",
        "paragraphs": [
          "A tax is money collected by a government from people or businesses to help pay for shared needs such as roads, schools, hospitals, safety, and administration. In India, taxes can be collected by the Union government, state governments, or local bodies. The amount and method depend on the type of money, transaction, property, or activity involved, not simply on whether someone feels rich or poor.",
          "A useful first map has two branches. Direct taxes are charged on income or ownership and are generally paid by, or linked to, the person or organisation responsible. Indirect taxes are included in the price of many goods and services, so a customer may pay them to a seller, who then accounts for them. The rules can contain exemptions, thresholds, filing duties, and special cases."
        ],
        "terms": [
          [
            "Direct tax",
            "A tax linked more directly to income or ownership, such as income tax."
          ],
          [
            "Indirect tax",
            "A tax collected through a purchase or transaction, such as GST in many situations."
          ],
          [
            "Taxable income",
            "Income considered under applicable rules after permitted adjustments, exemptions, or deductions."
          ]
        ]
      },
      {
        "example": "Suppose Riya receives salary and a small amount of bank interest. Her payslip may show tax already deducted, while her bank statement records interest separately. She would need to understand the applicable reporting process and compare records; this example does not calculate her liability or suggest what she should do.",
        "heading": "2. Income tax: when earnings enter the map",
        "paragraphs": [
          "Income tax concerns certain earnings and other income, subject to the rules that apply to a person’s situation. Possible sources include salary, freelance work, rent, interest, or gains from selling an asset. Not every receipt is automatically taxable, and a tax year, paperwork, and calculation method matter. Because thresholds and provisions can change, reliable official guidance is safer than an old social-media post.",
          "An employer may deduct tax before paying salary, a process often shown in payroll records. This deduction is not proof that every obligation is finished: a person may still need to check documents, report other income, or claim eligible adjustments through the prescribed process. Keep statements, salary records, receipts, and investment paperwork securely. Never copy another person’s tax treatment; similar-looking income can have different rules."
        ]
      },
      {
        "heading": "3. Indirect tax: the tax inside a price",
        "misconception": "Misconception: ‘Only adults or high earners pay tax.’ Reality: people can encounter indirect tax in ordinary purchases even when they have no income-tax filing obligation. Paying a tax through a price does not automatically mean a person owes income tax, and an income-tax deduction does not mean every purchase is tax-free.",
        "paragraphs": [
          "When you buy a meal, phone accessory, ticket, or online service, the displayed or final price may include an indirect tax. India’s Goods and Services Tax, or GST, is a major example, though the exact treatment depends on the item, seller, location, and rules. A bill can show the taxable value and tax separately, helping you understand what you paid.",
          "Indirect tax changes the cost of consumption rather than appearing as a deduction from your bank balance labelled ‘tax’. Businesses may collect and deposit it, but customers usually experience it through prices. A discount, refund, bundled charge, or marketplace invoice can make the final amount less obvious. Check an invoice for the seller’s details, line items, total, and any clearly stated tax rather than guessing from a headline price."
        ]
      },
      {
        "heading": "4. Smart habits, limits, and changing rules",
        "paragraphs": [
          "Good tax habits are mostly about clarity: save payslips and invoices, separate personal and business records when relevant, note dates, and protect identity documents. Before submitting a return, paying a demand, or trusting a message, verify the source through official government portals or a qualified professional. Scammers may use urgent language, fake refunds, or requests for passwords and one-time codes.",
          "Taxes have limits and risks. A rule that applies to one year, state, income type, or age group may not apply elsewhere, and a calculator cannot replace the full legal text or professional review. Missing a deadline, reporting incorrectly, or ignoring a notice can create interest, penalties, or stress. This lesson gives a learning framework, not personalised financial or tax advice; check current official rules before acting."
        ]
      }
    ],
    "slug": "taxes",
    "standfirst": "Taxes help fund public services, but they also affect prices, pay, savings, and everyday choices. This beginner map explains the main routes money takes through India’s tax system, what records matter, and why rules should always be checked before acting.",
    "title": "Taxes: the beginner map for India"
  },
  {
    "category": "Money basics",
    "check": [
      "Which statement best describes insurance: growing money, transferring a specified financial risk, or guaranteeing every expense is paid?",
      "Name two policy features that can reduce or limit a claim payout.",
      "Why can a premium still have value when no claim is made?"
    ],
    "minutes": 8,
    "sections": [
      {
        "heading": "What insurance actually does",
        "paragraphs": [
          "Risk is the possibility that something costly and unwanted may happen: a hospital bill, a damaged scooter, or a death in a family. Insurance transfers some of that financial risk to an insurer. You pay a known amount, called a premium, and the insurer may pay for a covered loss, subject to the policy's rules, limits, exclusions, and claim process.",
          "Insurance does not stop an accident or guarantee that every expense will be paid. The policy is a contract describing what is covered, who is covered, how much can be paid, and what you must do. If an event is excluded, a limit is reached, documents are missing, or information was inaccurate, the claim may be reduced or rejected. Reading the wording matters."
        ],
        "terms": [
          [
            "Premium",
            "The amount paid to keep an insurance policy active."
          ],
          [
            "Policy",
            "The contract stating coverage, conditions, limits, and exclusions."
          ],
          [
            "Claim",
            "A request asking the insurer to pay for a covered loss."
          ]
        ]
      },
      {
        "heading": "Protection is different from investing",
        "misconception": "Misconception: Insurance is an investment because money may be paid out. A payout is compensation for a covered loss or a benefit under the contract; it is not automatically a return on invested money.",
        "paragraphs": [
          "An investment is usually bought with the aim of building wealth or earning a return, while insurance is bought to reduce the money shock from a specified risk. A policy premium is generally a cost of protection, not a deposit that must come back to you. Some products combine protection and savings, but their costs, conditions, and outcomes still need careful examination.",
          "For example, paying ₹6,000 a year for health cover does not mean you should expect ₹6,000 plus profit later. If a covered treatment costs ₹2 lakh, the policy might pay according to its deductible, waiting periods, room limits, co-pay, exclusions, and sum insured. If no covered claim occurs, that does not mean the premium was wasted; protection was the service received."
        ]
      },
      {
        "example": "A family may consider health insurance because one hospitalisation could disrupt rent, school fees, or savings. The useful question is not whether the policy will make money, but whether its covered protection, limits, and exclusions fit the risk they are trying to transfer.",
        "heading": "How to judge a policy carefully",
        "paragraphs": [
          "Start with the risk and the possible financial impact, not with a promised benefit. Ask what event is covered, who needs protection, how long cover lasts, and what amount would be difficult for the family to manage. Compare the premium with the coverage, exclusions, deductibles, co-payments, waiting periods, renewal terms, and whether the amount covered may become inadequate.",
          "In India, health, life, vehicle, property, and travel policies can work differently, and terminology may vary. Keep proposal forms, receipts, policy documents, and claim communications. Give complete and truthful information, because hiding a relevant fact can create claim problems. Use official insurer documents and check details with a qualified, authorised professional when something is unclear; avoid choosing solely because of a sales pitch."
        ]
      },
      {
        "heading": "Limits, trade-offs, and smart questions",
        "paragraphs": [
          "Insurance has trade-offs. A lower premium may come with a higher deductible, narrower cover, or more exclusions; a larger cover may cost more. Premiums can change under the policy's terms, renewal may have conditions, and inflation can make an old coverage amount less useful. No policy removes every risk, so an emergency fund and sensible safety habits may still matter.",
          "Before agreeing, ask: What exactly triggers a payout? What is not covered? Who pays first, and how much? Are there network, documentation, or notification requirements? What happens if a premium is missed or the policy is not renewed? These questions cannot predict a claim decision, but they can reveal uncertainty. Never treat “guaranteed,” “zero risk,” or “double money” language as proof of a good fit."
        ]
      }
    ],
    "slug": "insurance",
    "standfirst": "Insurance helps protect you from a large, uncertain financial loss by sharing that risk with an insurer. It is mainly protection, not a way to grow savings or earn returns.",
    "title": "Insurance: Transferring a Risk, Not Investing"
  },
  {
    "category": "Investing",
    "check": [
      "What is the main difference between owning mutual fund units and directly owning one company’s shares?",
      "If you own 100 units and the NAV falls from ₹20 to ₹18, what is the approximate value before fees or taxes, and what does that example not guarantee?",
      "Why can diversification reduce some risk without making a mutual fund risk-free?"
    ],
    "minutes": 8,
    "sections": [
      {
        "heading": "One basket, one stated job",
        "paragraphs": [
          "A mutual fund is a shared pool of money. Investors buy units, and the fund uses the combined pool to buy assets such as shares, government securities, corporate bonds, or other investments. A professional fund manager follows the scheme’s stated objective, such as seeking growth or income. You own units of the pool, not a direct slice of every company inside it.",
          "The fund’s job matters because different baskets carry different risks. An equity fund may rise and fall sharply because it invests mainly in shares. A debt fund can still lose value when interest rates, borrowers, or markets change. A hybrid fund combines asset types. Before investing, read the scheme information, costs, risks, and withdrawal rules rather than choosing from a catchy name."
        ],
        "terms": [
          [
            "Unit",
            "Your proportionate holding in the mutual fund."
          ],
          [
            "NAV",
            "The per-unit value of the fund’s assets after liabilities are considered."
          ],
          [
            "Expense ratio",
            "A fee taken from the fund’s assets for operating and managing it; it reduces returns."
          ],
          [
            "Diversification",
            "Spreading money across investments so one holding has less influence on the whole basket."
          ]
        ]
      },
      {
        "example": "A fund holding 60% shares and 40% bonds may behave differently from a fund holding 90% shares. The first could be less sensitive to a share-market fall, but it is not protected from losses: bonds, shares, fees, and changing market conditions can all affect its NAV.",
        "heading": "How your money can change",
        "paragraphs": [
          "When the assets in a fund change value, the fund’s NAV generally changes too. If a fund owns shares worth more overall, its units may gain value; if those shares fall, units may lose value. Your result also depends on fees, the price and timing of transactions, and any income or distributions handled by the scheme. Past performance cannot reliably predict future performance.",
          "Imagine you invest ₹2,000 in a fund whose NAV is ₹20, before any applicable charges. You receive 100 units. If the NAV later becomes ₹18, those units are worth about ₹1,800 before considering fees or taxes. If it becomes ₹23, they are worth about ₹2,300. This is an illustration, not a forecast; actual values and charges depend on the scheme and transaction."
        ]
      },
      {
        "heading": "Risk, access, and sensible questions",
        "misconception": "Misconception: “A mutual fund is automatically safer because an expert manages it.” Management can help select and monitor holdings, but it cannot control markets or guarantee returns. A fund’s risk comes from its assets, strategy, concentration, costs, and the time you hold it. “Expert-managed” describes who runs the basket, not a promise about its outcome.",
        "paragraphs": [
          "A mutual fund is not a bank deposit and does not promise that your original money will be safe. Diversification reduces the damage from one weak holding, but a whole market, sector, interest-rate move, credit event, or liquidity problem can affect many holdings together. Some schemes may also have limits or costs for selling quickly. Check the fund’s risk level and exit conditions before acting.",
          "For an Indian teen, learning can start with questions rather than a rush to invest: What assets does this scheme hold? Does its objective fit the time available? How much could the value fall? What are the costs, taxes, and access rules? Eligibility, account requirements, and tax treatment can depend on age, account setup, and changing regulations, so a trusted adult and official documents matter."
        ]
      }
    ],
    "slug": "mutual-funds",
    "standfirst": "A mutual fund collects money from many investors and puts it into a planned basket of assets. Learn what the basket is designed to do, how your share is measured, and why diversification does not remove risk.",
    "title": "Mutual funds: a basket with a job"
  },
  {
    "category": "Investing",
    "check": [
      "Why might an index fund’s result differ slightly from the index it follows?",
      "What is the main trading-time difference between an ETF and an index mutual fund?",
      "Name two risks that can remain even after spreading money across a basket."
    ],
    "minutes": 8,
    "sections": [
      {
        "heading": "What is an index fund?",
        "paragraphs": [
          "An index is a rule-based list that represents a slice of a market, such as large Indian companies or government bonds. An index fund tries to copy that list rather than having a manager constantly choose winners. If an index contains 100 companies, the fund may hold those companies in roughly similar proportions, so your money is spread across a basket instead of one business.",
          "Because the fund follows an index, its return will usually be close to the index’s return, but not exactly equal. Fund expenses, cash holdings, trading costs, and tracking error can create a gap. Diversification can reduce the damage caused by one holding falling, yet it cannot prevent losses when the wider market or bond segment declines."
        ],
        "terms": [
          [
            "Index",
            "A rules-based list used to measure a market segment."
          ],
          [
            "Index fund",
            "A fund designed to follow an index."
          ],
          [
            "Diversification",
            "Spreading money across different holdings to reduce reliance on one of them."
          ]
        ]
      },
      {
        "example": "A ₹2,000 purchase of an ETF priced at ₹200 would be about 10 units before charges and any applicable taxes. The amount can rise or fall; the example is only about arithmetic, not a return estimate.",
        "heading": "How is an ETF different?",
        "paragraphs": [
          "An exchange-traded fund, or ETF, is also a basket, and many ETFs follow an index. The key difference is how it is bought and sold: an ETF trades on a stock exchange during market hours, with prices moving during the day. An index mutual fund is normally bought from the fund provider or platform at a price calculated after the day’s trading, called its net asset value.",
          "For example, suppose an ETF holds parts of 50 Indian companies. Buying one ETF unit gives you indirect exposure to that basket, not ownership of every share in your own name. A unit might be quoted at ₹200 at one moment and ₹202 later, even if the underlying basket’s calculated value changes differently. The trading price can differ slightly from that value."
        ]
      },
      {
        "heading": "Costs, access, and practical details",
        "paragraphs": [
          "Both types of funds have costs. An expense ratio is an ongoing fee taken from the fund’s assets, while an ETF may also involve brokerage, exchange charges, and the gap between the price someone offers to buy and the price someone asks to sell. A lower-looking fee does not automatically make a fund better; the index, tracking quality, liquidity, and fit with a person’s goal matter too.",
          "In India, buying or selling an ETF generally uses a demat and trading setup, while an index mutual fund may use a mutual-fund platform or provider process. Minimum amounts, settlement timing, taxes, and account requirements can vary and may change. Read the fund’s documents, understand what index it tracks, and check charges rather than assuming every basket works the same way."
        ]
      },
      {
        "heading": "Limits and risks to remember",
        "misconception": "Misconception: “A fund that follows an index cannot lose money.” Reality: it follows the index both when the market rises and when the basket falls, minus costs and tracking differences.",
        "paragraphs": [
          "A broad basket still has concentration risk: a sector, country, currency, or theme may make up a large share of it. International, debt, commodity, and sector funds each respond to different risks, including exchange-rate changes, interest-rate movements, credit problems, or commodity-price swings. An ETF can also be hard to trade at a fair price if few buyers and sellers are active.",
          "Neither an ETF nor an index fund guarantees profit or protects your money. Markets can fall for long periods, and past performance cannot predict future results. The right choice depends on time horizon, ability to handle losses, taxes, and other personal circumstances. This lesson is general education, not a personal recommendation; a trusted adult or qualified adviser can help with individual decisions."
        ]
      }
    ],
    "slug": "etfs",
    "standfirst": "Learn how index funds and exchange-traded funds (ETFs) spread your money across a group of investments, how they differ, and why convenience never removes risk.",
    "title": "ETFs and Index Funds: A Basket Instead of One Bet"
  },
  {
    "category": "Investing",
    "check": [
      "Why is a higher possible return not the same as a guaranteed higher return?",
      "Name two different kinds of investment risk and explain how they could affect an investor.",
      "If ₹10,000 falls by 20%, what amount remains, and why would a later 20% rise not fully restore the original amount?"
    ],
    "minutes": 8,
    "sections": [
      {
        "heading": "The trade-off behind every possible gain",
        "paragraphs": [
          "Return is what your money earns or loses over a period. It can come from income, such as interest or dividends, and from a change in value. Risk is the chance that the actual result differs from what you hoped, including losing some or all of your original money. A higher possible return usually comes with greater uncertainty, not a guaranteed reward.",
          "Think of risk and return as a trade you cannot delete: you cannot demand a high, certain return with no downside. A bank deposit, a bond, a mutual fund, and a share can each behave differently because their risks differ. Even an investment that has performed well before can fall later. Past performance is information, not a promise about the future."
        ],
        "terms": [
          [
            "Return",
            "The gain or loss an investment produces over time."
          ],
          [
            "Risk",
            "The possibility that an investment’s result is worse, more uncertain, or different from expected."
          ],
          [
            "Volatility",
            "How sharply and frequently a price moves up and down."
          ]
        ]
      },
      {
        "heading": "Risk has more than one shape",
        "misconception": "Misconception: diversification makes an investment safe. It can spread exposure across different assets, but diversified investments can still lose value, and diversification does not guarantee profit or protect against every risk.",
        "paragraphs": [
          "Price risk is the chance that an asset’s market value falls when you need to sell. Inflation risk is the chance that rising prices reduce what your money can buy, even when its rupee amount grows. Credit or default risk appears when a borrower may not repay as promised. Liquidity risk means you may not be able to sell quickly at a fair price.",
          "There are also concentration and behaviour risks. Putting too much money into one company, sector, or idea can make one problem hurt more. Panic selling after a fall, or chasing a sudden rise, can turn temporary movement into a lasting loss. Diversification can reduce some company-specific risk, but it cannot remove market-wide declines, inflation, fees, taxes, or uncertainty."
        ]
      },
      {
        "example": "Example: ₹10,000 falling 20% becomes ₹8,000. A later 20% rise takes it to ₹9,600, not back to ₹10,000, because the percentage is applied to the smaller amount.",
        "heading": "Use a rupee example, not a promise",
        "paragraphs": [
          "Suppose you put ₹10,000 into an investment. If it rises 8%, it becomes ₹10,800 before any applicable costs or taxes. If it falls 8%, it becomes ₹9,200. The percentages look symmetrical, but recovery is not: after an 8% fall, the money needs a little more than an 8% rise to return to ₹10,000. Losses can therefore matter more than they first appear.",
          "Before comparing options, ask what could go wrong, when you might need the money, and whether you could tolerate a fall without making a rushed decision. Read the product documents and check costs, access rules, and whether returns are fixed, variable, or only estimated. For an Indian teen, learning and discussing choices with a trusted adult can be more useful than copying someone else’s investment decision."
        ]
      }
    ],
    "slug": "risk-return",
    "standfirst": "Every investment asks you to exchange some uncertainty for a possible outcome. Learn how risk changes return, why losses matter, and how to think clearly before choosing any investment in India.",
    "title": "Risk and return: the trade you cannot delete"
  },
  {
    "category": "Investing",
    "check": [
      "If ₹4,000 is divided equally among four investments and one falls 20% while the others stay unchanged, about what percentage of the total has been lost?",
      "Why might owning ten companies still fail to provide much diversification?",
      "Name two risks that diversification can reduce and one risk it cannot eliminate."
    ],
    "minutes": 8,
    "sections": [
      {
        "heading": "What diversification means",
        "paragraphs": [
          "Diversification is the practice of spreading money across investments that do not all behave in exactly the same way. Imagine having ₹1,000: instead of putting the entire amount into one company, you might divide it among several kinds of assets or businesses. If one performs poorly, the others may soften the impact. Diversification reduces concentration risk; it does not remove investing risk.",
          "The goal is not to collect as many investments as possible. It is to avoid depending too heavily on one company, sector, asset type, or country. For example, owning several technology companies may still leave you concentrated in technology. A more thoughtfully mixed collection could include different sectors and asset categories, chosen with attention to your time horizon and ability to handle losses."
        ],
        "terms": [
          [
            "Concentration risk",
            "The extra risk created when too much money depends on one investment or closely related group."
          ],
          [
            "Asset allocation",
            "How money is divided among broad asset categories, such as shares, bonds, cash, or other assets."
          ]
        ]
      },
      {
        "example": "A ₹6,000 collection divided equally among six investments has ₹1,000 in each. A 30% fall in one position reduces the collection by ₹300, or 5% of ₹6,000, if everything else is unchanged.",
        "heading": "How spreading risk works",
        "paragraphs": [
          "Different investments can respond differently to the same event. A company’s results may suffer while another industry benefits; a debt investment may behave differently from shares; and a business focused on India may not move in step with one operating elsewhere. These relationships are not guaranteed, but combining less closely connected exposures can make the overall journey less bumpy.",
          "Suppose ₹6,000 is split equally across six unrelated businesses. If one falls by 30% while the others are unchanged, the total decline is about 5%, before fees, taxes, and other effects. If all six fall together during a broad market shock, diversification cannot prevent a loss. The example shows only the arithmetic of concentration, not a prediction or recommendation."
        ]
      },
      {
        "heading": "Diversification has limits",
        "misconception": "Misconception: “If I own ten investments, I am automatically diversified.” Reality: ten investments can all depend on the same sector, market, or economic outcome. Diversification depends on meaningful differences in the risks you hold, not simply the number of items.",
        "paragraphs": [
          "Diversification cannot guarantee profits, preserve every rupee, or make an unsuitable investment suitable. Investments can be connected in hidden ways: companies may share suppliers, rely on the same economy, or react to the same global news. A fund or basket may look broad but still be dominated by a few large holdings or one sector, so checking what it actually contains matters.",
          "Spreading money also brings trade-offs. More holdings can mean more record-keeping, costs, and difficulty understanding what you own. Very small amounts spread too thinly may not change outcomes much. Diversification should be considered alongside emergency savings, goals, time horizon, fees, taxes, and personal risk capacity. This is general education, not individualized financial advice."
        ]
      },
      {
        "heading": "Using the idea responsibly",
        "paragraphs": [
          "For an Indian teen, diversification is a way to understand risk before focusing on returns. You can compare exposure by company, sector, asset type, geography, and purpose. A classroom portfolio might track a hypothetical ₹10,000 split across categories and record how each changes, without using real money. The exercise can reveal whether one holding quietly dominates the result.",
          "Reviewing a mix does not mean constantly buying and selling. Prices change, and a once-balanced mix can drift. Any real decision should follow appropriate adult or regulated professional guidance, clear product documents, and an understanding of costs and risks. Avoid promises of guaranteed returns, stock tips, or copying someone else: a diversified portfolio can still lose value, sometimes for a long time."
        ]
      }
    ],
    "slug": "diversification",
    "standfirst": "Diversification means spreading your money across different investments so one poor performer does not decide your whole result. Learn what it can and cannot protect you from, using simple rupee examples and an India-aware perspective.",
    "title": "Diversification: Don’t Put Every Egg in One Basket"
  },
  {
    "category": "Investing",
    "check": [
      "Why could money needed in 12 months be a poor match for a highly volatile investment, even if its long-term return might be higher?",
      "Name three details you would record for a goal before thinking about how to fund it.",
      "True or false: A long time horizon guarantees that you will not lose money. Explain your answer."
    ],
    "minutes": 8,
    "sections": [
      {
        "heading": "Start with the goal, not the product",
        "paragraphs": [
          "A financial goal is a specific result you want money to help achieve. “I want to be rich” is too vague to guide a decision; “I want ₹30,000 for a course in two years” is clearer. Write the purpose, amount, and target date. If the amount could change, note what might make it rise, such as fees or travel costs.",
          "Goals can be short-term, medium-term, or long-term, and several can exist together. A near-term goal might be exam materials; a later goal might be higher education. Separate needs from nice-to-haves, and remember that essential money should not be put at risk just because an investment has a chance of growing faster. Planning is about trade-offs, not guaranteed results."
        ],
        "terms": [
          [
            "Goal",
            "The amount and purpose you are aiming for."
          ],
          [
            "Target date",
            "The time by which the money is needed."
          ],
          [
            "Time horizon",
            "The period between today and the target date."
          ]
        ]
      },
      {
        "heading": "Why time horizon changes the match",
        "misconception": "Misconception: A longer time horizon makes an investment safe. Time can provide more opportunity for recovery, but it does not remove market risk, fees, inflation, or the possibility of losing money.",
        "paragraphs": [
          "Your time horizon affects how much uncertainty you may be able to tolerate. With a longer horizon, there may be more time for ups and downs to occur before the money is needed, although losses are still possible. With a short horizon, a fall just before the target date could leave you short, even if markets recover later.",
          "Matching is not a prediction exercise. It means asking whether the level of risk and possible delay fit the deadline. Money needed next year generally needs stability and access more than a hope of high returns; money for a distant goal may have more time to absorb volatility. Inflation can also reduce what a fixed amount will buy over time."
        ]
      },
      {
        "example": "Example: Riya labels her laptop goal “12 months, fixed,” and her education goal “6 years, adjustable.” She checks progress every few months instead of reacting to daily price movements. The labels do not guarantee success; they simply make the decision and its limits visible.",
        "heading": "Build a simple goal map",
        "paragraphs": [
          "List each goal in a table with its amount, target date, importance, and how flexible the date is. Then identify money that must remain available for everyday needs and unexpected events before considering riskier choices. A goal with a fixed date and little flexibility deserves more caution than one that can be postponed or reduced.",
          "Suppose you want ₹24,000 for a laptop in 12 months and ₹1,20,000 for education in six years. The laptop goal has little time to recover from a fall, so protecting access and value matters more than chasing growth. The education goal has a longer horizon, but you would still review it as the date approaches and gradually reduce uncertainty if needed."
        ]
      },
      {
        "heading": "Review the match without overpromising",
        "paragraphs": [
          "A goal plan should change when your situation changes. Recheck the amount, deadline, contributions, access needs, and risk you can genuinely handle after learning more. A market fall, a delayed admission, or a new family expense can change the match. Review calmly and avoid making urgent decisions based only on headlines, social media, or past performance.",
          "There is no single best investment for every goal, and a suitable match still may not reach the target. Returns are uncertain, taxes and fees can reduce outcomes, and products can have rules or delays around withdrawals. For a real decision, involve a trusted adult and consider regulated, qualified guidance. This lesson is education, not personalised financial advice."
        ]
      }
    ],
    "slug": "goals",
    "standfirst": "A clear goal and a realistic time horizon can help you choose an approach that fits what your money needs to do—and recognise when investing may not fit at all.",
    "title": "Goals, Time Horizons, and Matching the Two"
  },
  {
    "category": "Investing",
    "check": [
      "What does an expense ratio measure, and why might you not see it as a separate payment?",
      "Why is comparing only the lowest fee potentially misleading? Name two other things to compare.",
      "If ₹10,000 is invested for a year in a fund with a 1% expense ratio, what rough annual cost does that suggest, and why might the actual amount differ?"
    ],
    "minutes": 8,
    "sections": [
      {
        "heading": "The price tag behind an investment",
        "paragraphs": [
          "Investing is not free, even when an app shows a zero-commission purchase. A fund or platform may charge for managing money, operating systems, recording transactions, or other services. Some costs are taken from your investment rather than billed separately, so your account balance can grow more slowly without an obvious payment notification. In India, read the scheme documents and fee disclosures before deciding.",
          "An expense ratio is the yearly operating cost of a mutual fund or exchange-traded fund, shown as a percentage of the fund's average assets. If a fund has a 1% expense ratio and you have ₹10,000 invested for a full year, the rough cost is ₹100 before considering changing balances. It is not a guaranteed final bill: the percentage and your invested amount can change, and taxes or other charges may be separate."
        ],
        "terms": [
          [
            "Expense ratio",
            "Annual operating expenses expressed as a percentage of a fund's assets."
          ],
          [
            "Direct cost",
            "A charge you can see as a separate amount, such as a transaction or account fee."
          ],
          [
            "Indirect cost",
            "A cost reflected inside returns or the value of an investment rather than paid as a separate bill."
          ]
        ]
      },
      {
        "example": "Suppose ₹20,000 earns 8% before costs for one year. A 0.5% annual fund cost would leave roughly 7.5% before other charges, while a 1.5% cost would leave roughly 6.5%. Real results will vary because returns, balances, and charges can change.",
        "heading": "How a quiet leak compounds",
        "paragraphs": [
          "A fee can matter because it leaves less money invested to earn future returns. Imagine two otherwise similar funds each starting with ₹20,000 and earning the same market return before costs. If one costs more every year, the difference may look tiny at first, but repeated deductions can widen the gap over many years. This is an illustration, not a forecast: markets do not deliver steady returns, and fees never guarantee performance.",
          "Look beyond one percentage. A fund with a lower expense ratio is not automatically better if it tracks its goal poorly, carries different risks, or has wider buying and selling spreads. Also check whether a platform fee, exit load, brokerage, taxes, or currency-related cost can apply. The useful question is total cost for the service and risk you are actually comparing, not simply “Which number is smallest?”"
        ]
      },
      {
        "heading": "Reading the small print in India",
        "misconception": "Misconception: “A higher fee means a safer or better investment.” Reality: fees pay for services, but they do not promise higher returns, lower losses, or protection from a falling market. Compare costs alongside purpose, diversification, liquidity, tracking quality, and risk.",
        "paragraphs": [
          "When comparing Indian investment products, look at the fund's official documents, fee table, and regular updates rather than relying only on an app label or an influencer's summary. Check whether the number is an annual percentage, when it is calculated, and which costs sit outside it. A “direct” plan can have a different cost structure from a plan that includes distribution services, but lower cost does not remove investment risk.",
          "Some charges are conditional. An exit load may apply when you sell within a stated period; a platform may have a subscription or account charge; and buying or selling can involve taxes or market-related costs. Rules and disclosures can change, so use current official information when you act. If a term is unclear, pause and ask a trusted adult or qualified adviser to explain it; do not guess from a headline."
        ]
      },
      {
        "heading": "A sensible fee-check habit",
        "paragraphs": [
          "Before investing, write down the product's purpose, major risks, expected holding period, and every fee you can find. Then compare like with like: similar strategies, similar risk, and the same time horizon. Ask how a charge is collected, whether it is fixed or percentage-based, and what happens if your balance is small. A rupee amount can make a percentage easier to understand, but it is still only an estimate.",
          "Fees are one part of a decision, not a reason to chase the cheapest-looking product. You can lose money even with zero visible fees, and a low-cost fund can fall when its underlying assets fall. Minors may also need a parent or guardian and appropriate account arrangements in India. This lesson is for learning, not personal financial advice; choose only after understanding the product and its limits."
        ]
      }
    ],
    "slug": "fees",
    "standfirst": "Small charges can quietly reduce what your money earns. Learn how to spot them, compare them fairly, and keep risk in view.",
    "title": "Fees, expense ratios, and the quiet leak"
  },
  {
    "category": "Markets",
    "check": [
      "If an IPO includes an offer for sale, who generally receives the money from those shares?",
      "Why might an applicant receive fewer shares than requested in an IPO?",
      "Does an oversubscribed IPO guarantee that its shares will rise after listing? Explain briefly."
    ],
    "minutes": 8,
    "sections": [
      {
        "heading": "Why a company launches an IPO",
        "paragraphs": [
          "A private company may launch an IPO to raise money from a wide group of investors. It can use the funds for expansion, factories, technology, debt repayment, or other stated purposes. Existing owners may also sell some shares, called an offer for sale. In that case, some money goes to selling shareholders rather than directly into the business.",
          "Before an IPO, the company and its advisers prepare disclosures about its business, finances, risks, management, and use of funds. In India, investors can read the offer document within the securities-market framework before deciding. Disclosure improves information, but it cannot remove uncertainty: forecasts can miss, industries can change, and a company can still perform poorly after listing."
        ],
        "terms": [
          [
            "IPO",
            "Initial public offering: the first public sale of a company’s shares."
          ],
          [
            "Fresh issue",
            "New shares sold by the company, with proceeds generally going to the company."
          ],
          [
            "Offer for sale",
            "Existing shareholders sell their shares; proceeds generally go to those sellers."
          ]
        ]
      },
      {
        "example": "Suppose an IPO offers 1,000 shares at ₹100 each. Applications request 3,000 shares, so it is oversubscribed three times. An applicant asking for 30 shares might receive fewer than 30, depending on the allocation method. If the first traded price is ₹85, the shares have not delivered an instant gain; the market is valuing them below the offer price.",
        "heading": "How investors apply and receive shares",
        "paragraphs": [
          "During the IPO period, eligible investors apply for a quantity of shares at the stated price or within a price band. Applications commonly use India’s blocked-funds process, so money may be held aside rather than immediately transferred. If demand exceeds the available shares, the issue is oversubscribed and applicants may receive fewer shares, or none, under the stated allocation rules.",
          "After the application closes, the company finalises allotment, refunds or unblocks money where required, and arranges for allotted shares to appear in investors’ demat accounts. The shares then list on a stock exchange, where buyers and sellers trade them. The listing price is set by market demand, so it can be above, equal to, or below the IPO price."
        ]
      },
      {
        "heading": "Listing day is not the finish line",
        "misconception": "Misconception: “If an IPO is oversubscribed, it must be a good investment.” Oversubscription shows that applications exceeded the shares offered; it can reflect excitement, limited supply, or short-term expectations. It does not establish fair value, future profits, or a safe outcome.",
        "paragraphs": [
          "An IPO price is based on information, assumptions, and demand at that time; it is not a promise about future value. Once trading begins, prices can move sharply because of sentiment, news, company results, interest-rate conditions, or broad market movements. A strong first-day rise may attract attention, but it does not prove that the business is worth more over the long term.",
          "Investors also face risks such as business losses, heavy debt, weak governance, competition, limited trading liquidity, and dilution from future share issues. Lock-in arrangements may restrict some existing holders for a period, but they do not guarantee stability. Reading the risk factors and understanding how the company expects to earn money are more useful than treating popularity as evidence."
        ]
      },
      {
        "heading": "A careful way to understand an IPO",
        "paragraphs": [
          "A learner can start by separating three questions: What does the company sell? How will it use the money? What could go wrong? The offer document can help answer these questions through financial statements, business details, promoter information, and risk disclosures. Comparing claims with actual performance matters, and unfamiliar accounting terms may require help from a trusted, qualified adult or professional.",
          "An IPO is an event, not a complete investing plan. Costs and taxes may apply, prices can fall below the issue price, and selling may be difficult at a preferred price. No lesson can predict an individual outcome. Young people should focus on learning, avoid pressure or promises of guaranteed returns, and never treat this explanation as personalised financial advice or a stock recommendation."
        ]
      }
    ],
    "slug": "ipo",
    "standfirst": "An initial public offering, or IPO, is a company’s first sale of shares to public investors. Learn why firms do it, how the process works in India, and why a listing is never a guaranteed profit.",
    "title": "IPOs: What Happens When a Company Goes Public"
  },
  {
    "category": "Markets",
    "check": [
      "Which order type gives a maximum buying price or minimum selling price, but may remain unfilled?",
      "Why might a 20-share market order receive more than one execution price?",
      "In an order book, what do the highest bid, lowest ask, and spread represent?"
    ],
    "minutes": 10,
    "sections": [
      {
        "heading": "What an order really does",
        "paragraphs": [
          "An order is an instruction sent to a trading platform to buy or sell a security. It is not the same as an instant exchange of money and shares: the instruction must be matched with another participant's opposite order. In India, a broker's app may show familiar buttons such as Buy, Sell, quantity, and order type, but the exchange still applies matching rules behind the scenes.",
          "Two ideas matter in every order: price and quantity. If you want to buy 10 shares, your instruction describes how many you want, while the order type describes the price you will accept. Orders may be filled fully, filled partly, cancelled, rejected, or left waiting. Even a carefully entered instruction cannot guarantee a particular outcome because prices and available sellers can change quickly."
        ]
      },
      {
        "example": "Example: A market buy for 20 shares can consume several sell-price levels, so the average execution price may differ from the quote seen a moment earlier.",
        "heading": "Market orders: speed with uncertainty",
        "paragraphs": [
          "A market order asks to buy or sell as soon as possible at the best prices currently available in the order book. Its main attraction is speed: if matching orders exist, it may execute without waiting for a chosen price. However, the final price is not promised. In a fast-moving or thinly traded security, different parts of one order can execute at different prices.",
          "Suppose you place a market order to buy 20 shares when the best available selling prices are ₹100 for 8 shares and ₹101 for 12 shares. The order could fill across both levels, making the average price about ₹100.60 before applicable charges and taxes. A market order therefore trades price certainty for a better chance of quick execution; it does not mean “buy at the last shown price.”"
        ],
        "terms": [
          [
            "Execution",
            "When an order is matched and completed, fully or partly."
          ],
          [
            "Slippage",
            "The difference between an expected or displayed price and the actual execution price."
          ],
          [
            "Partial fill",
            "When only some of the requested quantity is matched."
          ]
        ]
      },
      {
        "heading": "Limit orders: control with a waiting cost",
        "paragraphs": [
          "A limit order states the least favourable price you are willing to accept. For a buy limit, you set the maximum price, such as ₹98; it should execute only at ₹98 or lower. For a sell limit, you set the minimum price, such as ₹105; it should execute only at ₹105 or higher. This gives more price control, but not a promise of execution.",
          "A limit order can remain pending when the market never reaches its price, or when other orders at the same price are ahead of yours. It may also be only partly filled. Many platforms let users choose a validity period, such as the trading day, but settings differ and should be checked carefully. A limit price cannot protect against every risk, including gaps, outages, or an incorrect quantity."
        ]
      },
      {
        "heading": "Reading the order book responsibly",
        "misconception": "Misconception: “A limit order guarantees a safer trade.” It limits the execution price, but it may never execute, may fill only partly, and does not prevent the security's value from moving after a trade. A market order is not automatically reckless either; its suitability depends on context, liquidity, size, and the user's objective. Learning the mechanics is not a recommendation to trade.",
        "paragraphs": [
          "An order book lists queued buy orders, often called bids, and sell orders, often called asks or offers. The highest bid and lowest ask are commonly called the best prices; the difference between them is the spread. A trade occurs when compatible prices meet under the exchange's priority rules, which generally consider price first and then the time an order entered that price.",
          "An order book is a snapshot, not a forecast. Participants can add, change, or cancel orders, and displayed quantities may disappear before your instruction reaches the queue. Large visible quantities do not prove that a price will hold, and a narrow spread does not remove loss risk. Before using any order type, understand the platform's confirmation screen, charges, validity choices, and what happens if execution is partial."
        ]
      }
    ],
    "slug": "market-orders",
    "standfirst": "Learn how trading instructions are matched, why price and speed can differ, and how to read an order book without assuming that an order will always fill as expected.",
    "title": "Market Orders, Limit Orders, and Order Books"
  },
  {
    "category": "Markets",
    "check": [
      "A message promises guaranteed returns and says you must pay within ten minutes. What should you do first, and why is the urgency a red flag?",
      "Why might a rising balance inside an unfamiliar investment app fail to prove that your money is invested or withdrawable?",
      "Name two pieces of information you would verify independently before considering any investment opportunity, and explain one risk you would write down."
    ],
    "minutes": 8,
    "sections": [
      {
        "heading": "Why hype can hide risk",
        "paragraphs": [
          "Investment scams often begin with a tempting story: someone claims to have made quick, easy money and says you can do the same. Posts may show screenshots, luxury purchases, or a countdown to join. These images are not proof. A genuine investment can lose value, take time, and involve uncertainty; anyone promising guaranteed returns or no risk deserves extra caution.",
          "Hype can spread through group chats, short videos, influencers, or people who seem familiar. Scammers may use urgency—“act today,” “limited seats,” or “secret tip”—so you do not have time to think. They might ask for an upfront fee, your login, or money sent to a personal account. Pressure is a warning sign, not evidence that an opportunity is valuable."
        ],
        "terms": [
          [
            "Guaranteed return",
            "A promise that your money will definitely grow; real market-linked investments cannot remove all risk."
          ],
          [
            "FOMO",
            "Fear of missing out, which can push someone to act before checking information."
          ],
          [
            "Red flag",
            "A warning sign that calls for a pause and further verification."
          ]
        ]
      },
      {
        "example": "Riya receives a message promising to turn ₹2,000 into ₹20,000 in one week through a private trading group. The sender asks for her phone number, identity documents, and a ₹500 “activation fee,” then says the offer expires in ten minutes. Riya pauses, does not click the link, and discusses the claim with a trusted adult instead of sending money.",
        "heading": "Common scam patterns",
        "paragraphs": [
          "Some schemes show fake trading dashboards where a balance appears to rise, then demand a “tax,” “unlock charge,” or extra deposit before withdrawal. Others impersonate brokers, advisers, companies, or government-related services. A scammer may first allow a small withdrawal to build trust, then request much larger payments. A polished app or professional-looking logo can still be fake.",
          "Another pattern is a chain-recruitment pitch: you are told profits mainly come from bringing in friends, rather than from a clearly explained activity. Fraud can also involve manipulated tips, pump-and-dump hype, phishing links, or fake customer support. Never treat a WhatsApp message, testimonial, or celebrity image as independent verification. Check who is responsible, what the money buys, and how losses could occur."
        ]
      },
      {
        "heading": "A safer way to investigate",
        "misconception": "Misconception: “If I can see profits on the app, the investment must be real.” Reality: Screens and statements can be fabricated or manipulated. The ability to view a rising number is not the same as being able to withdraw money safely or verify the underlying activity.",
        "paragraphs": [
          "Start with a pause. Write down the exact promise, possible downside, all fees, lock-in or withdrawal conditions, and who receives your money. Look for information from independent, trustworthy sources rather than links supplied by the promoter. Verify the organisation and person through official channels you find yourself; do not rely on a phone number or website provided only in a message.",
          "Protect your digital and personal security as well as your cash. Do not share passwords, one-time passwords, PINs, or remote-access control. Use strong, unique passwords and enable available account security. If you are under 18, involve a parent, guardian, or another trusted adult before making a financial commitment. If money or data has already been shared, save messages and seek help quickly through appropriate official reporting or bank channels."
        ]
      },
      {
        "heading": "Risk, responsibility, and good judgment",
        "paragraphs": [
          "Even a legitimate market opportunity is not automatically suitable or safe for every person. Prices can fall, companies can fail, fees can reduce results, and selling may not happen at the price or time you expect. Diversification may reduce the impact of one loss but cannot guarantee a profit. Never borrow money, use someone else’s account, or invest money needed for essentials just to follow hype.",
          "Being careful does not mean rejecting every financial product; it means matching decisions to your knowledge, time horizon, and ability to handle loss. Ask questions you can understand, keep records, and accept “I do not know yet” as a sensible answer. No lesson can identify every scam or predict returns. Learning, checking, and taking time are stronger protections than excitement or promises."
        ]
      }
    ],
    "slug": "scams",
    "standfirst": "Learn how fraudsters and online hype can pressure you into risky money decisions—and how to pause, check claims, and protect yourself.",
    "title": "Investment Scams, Hype, and Red Flags"
  },
  {
    "category": "Markets",
    "check": [
      "How is FOMO different from evidence that an investment fits your goals and risk limits?",
      "Why can selling in panic turn an uncertain price movement into a permanent loss, and why is holding automatically not always safe?",
      "What three questions or steps could you use to slow down before reacting to a market headline or a friend’s success story?"
    ],
    "minutes": 8,
    "sections": [
      {
        "heading": "Why feelings matter in markets",
        "paragraphs": [
          "Money decisions are not made by calculators alone. A rising price can create excitement, while a falling price can feel like a personal emergency. FOMO means “fear of missing out”: the worry that everyone else is gaining and you are being left behind. Panic is an urge to act immediately to escape discomfort. Both feelings are normal, but neither is proof that an action is sensible.",
          "Your brain often gives extra attention to vivid stories, recent price moves, and what friends or social-media creators say. This can make a short-term change feel more important than the bigger picture. Markets are uncertain: prices can rise or fall for many reasons, and past performance cannot guarantee future results. Before acting, separate the feeling—“I might miss out”—from the fact you can actually verify."
        ]
      },
      {
        "example": "Suppose a ₹1,000 investment rises to ₹1,300 and friends celebrate. FOMO may say, “Buy now.” A calmer response asks what the investment is, why its value changed, what fees or risks exist, and whether losing part of the ₹1,300 would be manageable. The example shows a decision process, not a recommendation.",
        "heading": "FOMO and the rush to join",
        "paragraphs": [
          "FOMO can turn curiosity into a rushed decision. Someone might hear that a classmate made money, see a chart that has climbed, and think buying immediately is the only way to participate. But a price that has already moved may still fall, and a popular idea may not suit every person’s goals, time horizon, or ability to handle losses. Popularity is not research.",
          "A useful pause is to write down three things: what you think could happen, what evidence supports that view, and what could prove you wrong. Check whether the source is selling excitement, whether important risks are missing, and whether you understand the product. Never borrow money or use essential savings just to chase a trend. For teens, learning and asking a trusted adult questions are safer starting points than copying a crowd."
        ],
        "terms": [
          [
            "FOMO",
            "Fear of missing out; anxiety that others are gaining while you are not."
          ],
          [
            "Volatility",
            "How much and how quickly a price can move up or down; high volatility can mean larger losses as well as gains."
          ]
        ]
      },
      {
        "heading": "Panic, loss, and the value of patience",
        "paragraphs": [
          "Panic often appears after a drop. Seeing ₹5,000 become ₹4,200 can feel like the loss will continue forever, even though no one can know the next move. Selling in fear can make a temporary fall into a permanent loss, but holding blindly can also be risky. Patience does not mean ignoring danger; it means making decisions from a considered plan rather than a sudden emotion.",
          "Patience is easier when expectations are realistic. Investing is not a guaranteed way to make money, and waiting cannot remove company, market, inflation, liquidity, or fraud risks. Money needed soon should not be exposed to an uncertain price. Even a long-term approach can have disappointing periods. A person should understand possible losses, costs, and access limits before committing money, and review information instead of watching every tick."
        ]
      },
      {
        "heading": "A calm decision routine",
        "misconception": "Misconception: “If I wait, I will definitely miss the best chance.” Reality: no one can reliably know the best entry or exit point in advance. Waiting to understand the risk is different from giving up forever, and acting quickly does not guarantee a better result.",
        "paragraphs": [
          "When emotions spike, use a short routine: stop, breathe, and wait if the situation is not genuinely urgent. Name the feeling, check the original purpose and time frame, and look for reliable information rather than one dramatic post. Compare the best case, ordinary case, and bad case. If the decision is unclear, doing nothing for now is a valid choice.",
          "Keep a simple record of the reason for a decision, the risks you accepted, and what would make you reconsider. This can reveal whether you are reacting to a headline or following a thoughtful rule. Rules cannot predict markets, and diversification or patience cannot guarantee a profit. They can, however, reduce impulsive choices. Financial education is general information, not personalised advice; trusted adults or qualified professionals can help explain unfamiliar risks."
        ]
      }
    ],
    "slug": "behavior",
    "standfirst": "Markets can trigger strong feelings. Learn how fear of missing out, panic, and impatience can shape money decisions—and how to slow down, check evidence, and respect uncertainty.",
    "title": "Money behaviour: FOMO, panic, and patience"
  }
]

export const lessonForSlug = (slug) => courseLessons.find((lesson) => lesson.slug === slug)

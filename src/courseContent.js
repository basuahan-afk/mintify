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
]

export const lessonForSlug = (slug) => courseLessons.find((lesson) => lesson.slug === slug)

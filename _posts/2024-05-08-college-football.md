---
title: NCAA Football 
sub_title: This week in NCAA Football
layout: post_custom
permalink: ncaa
---

{% include post-title.html %}


<p class="prose mx-auto text-center">We have season tickets for Michigan Football, this page is just a what to expect and where our tickets are going for the season.</p>

<div class="grid grid-cols-4 gap-5 mb-12">
    {% for item in site.data.ncaa_football.events %}
    
    <a href="{{item.links[0].href}}" target="_blank" class="flex flex-col no-underline border p-3 rounded-lg text-center hover:shadow">

        <div class="flex flex-col items-center lg:gap-2">
            <div class="text-left flex lg:flex-row items-center col-span-2">
                <img src="{{item.competitions.first.competitors[1].team.logo}}" alt="{{item.competitions.first.competitors[1].team.name}}" class="h-10 lg:h-12 mx-3">
                <span>at</span>
                <img src="{{item.competitions.first.competitors[0].team.logo}}" alt="{{item.competitions.first.competitors[0].team.name}}" class="h-10 lg:h-12 mx-3">
            </div>

            <div class="flex-auto col-span-6 flex flex-col text-xs">
                <div class="flex-auto"></div>
                <div class="hidden lg:flex mx-auto font-bold font-base">
                    {{item.name}}
                </div>
                
                {% if item.competitions.first.status.displayClock != '0:00' %}
                <div class="gap-2">
                    <span>{{ item.competitions.first.status.displayClock }}</span>
                    <span>{{ item.competitions.first.status.period }} Qtr0</span>
                </div>
                {% else %}
                <div>
                    {{item.date | date: "%b %d"}} -  
                    {% if item.timeValid == true %} 
                        {{item.date | date: '%I:%M %Z' }}
                    {% else %}
                        TBD
                    {% endif %}
                </div>
                {% endif %}
                <div class="text-xs">{{item.competitions.first.venue.address.city}}{% if item.competitions.first.venue.address.state %}, {{item.competitions.first.venue.address.state}}{% endif %}</div>
                <div class="flex-auto"></div>
            </div>
            
        </div>
    
        
        <div>{{item.time_start | date: "%I:%M %p"}}</div>
        <div>{{item.building_name}}</div>
    </a>
    {% endfor %}
</div>